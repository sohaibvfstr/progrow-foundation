# Deploy Progrow to ServerByte

The production site is ordinary HTML, CSS, JavaScript, and image files. React runs in the visitor's browser. The hosting account does not need Node.js, a database, a paid animation service, or a running application process.

## Build the upload package

On your computer, from this project folder:

```sh
npm ci
npm run package
```

This type-checks the application, creates a production build in `dist/`, and creates `serverbyte-upload.zip`. The archive contains only the website files, including the hidden `.htaccess` file. The packaging script uses the `zip` command available on macOS and most Linux systems. If that command is unavailable, run `npm run build` and compress the **contents** of `dist/` manually, including `.htaccess`.

## Upload

1. Open the hosting account's File Manager, or connect using its SFTP/FTP details.
2. Open the document root for the intended domain. It is often `public_html`; DirectAdmin commonly uses `domains/your-domain/public_html`. Use the folder shown for your specific domain.
3. Back up any existing website before replacing its files.
4. Upload `serverbyte-upload.zip` and extract it **inside the document root**. `index.html`, `.htaccess`, and `assets/` must sit directly inside that folder, not inside another `dist/` folder.
5. Remove the uploaded ZIP after extraction, enable HTTPS through the hosting panel, and open the domain.
6. Visit `/about` directly and refresh it. Also check the mobile menu, search, interactive controls, and contact flow.

The default build is for a domain root such as `https://your-domain.example/`, or a dedicated subdomain. Do not upload it into a URL subfolder without updating Vite's `base`, React Router's `basename`, and any root-relative public asset paths together.

## Routing on different servers

The included `.htaccess` supports Apache and compatible LiteSpeed configurations with rewrite overrides enabled. It serves the application for page routes while preserving actual files and asset 404s. If direct page URLs return 404, ensure the hidden `.htaccess` was uploaded and ask hosting support to enable the rewrite configuration.

For an Nginx-only VPS, `.htaccess` is ignored. Add this to the appropriate server block with its document root pointed at the uploaded files:

```nginx
location / {
    try_files $uri $uri/ /index.html;
}

location /assets/ {
    try_files $uri =404;
}
```

## Contact and content

This is a static frontend; uploading it does not create an email delivery service or store form submissions in a database. Contact actions that open an email draft require the visitor to send the message in their email application. Before publishing, confirm that the foundation's existing addresses, contact details, programme descriptions, and any claims are correct. Photographs are included in `public/images/` and are packaged with the site. Google Fonts are loaded externally.

## Hosting assumptions

The exact ServerByte account and web-server configuration were not provided, so no live deployment has been performed. [ServerByte's web-hosting page](https://serverbyte.net/web-hosting) advertises DirectAdmin, FTP access, and file management; this package also works with other conventional static-file hosting panels. The Apache rules follow the [official mod_rewrite documentation](https://httpd.apache.org/docs/current/mod/mod_rewrite.html.en).

## Local preview

```sh
npm run dev
```

To preview the production build, run `npm run build` and then `npm run preview`. Open the local URL printed in the terminal. A local preview validates the frontend, but cannot verify the production account's Apache/Nginx configuration.
