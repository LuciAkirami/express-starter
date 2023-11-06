Sure, here is the provided text reformatted with Markdown:

**Creating Cookies**

1. `Document.cookie` (client side)
2. `set-cookie` header (server side)

**Cookies Properties**

- **Sent with each request:** Cookies are automatically sent to the server with each request. Be careful not to overload your application with cookies because it might slow down as network bandwidth becomes saturated with bloated requests.

- **Per Domain:** They are stored per domain. Think of them as cookie buckets. For instance, when you visit google.com, you will get a specific cookie for google.com. Any cookies created while in google.com will go to the google.com bucket and so on. There are exceptions, but this is the general rule. By default, if you create a cookie, it will only be accessible within the domain and will only be sent to the same domain. You can create a cookie with the `domain` property, which will also include subdomains. For example, `domain=husseinnasser.com` includes `blog.husseinnasser.com`, `about.husseinnasser.com`, etc.

**Example Domains:**

- `example.com`
- `www.example.com`

**Path-specific cookies:** Cookies for a given path only. For example, `/r1` and `/r2` routes make only cookies for `r1` and `r2`. The client will only send cookies for that path. If you know you are going to use cookies in certain paths, why waste precious bandwidth sending them with every path?

**Cookies Types**

1. **Session cookie:** No `expires` or `max-age`. Once the browser is closed, they are "deleted," although browsers are being smart and may retain them.

2. **Permanent cookie:** Set `max-age`. These persist even if the browser is closed, until the cookie gets expired.

3. **HttpOnly cookie:** Cannot be accessed with `document.cookie`, these are server side cookies.

4. **Secure cookie:** Only acceptable with HTTPS.

5. **Third-party cookie:** When one page references another page, it gets its own cookies.

6. **Zombie Cookies:** Recreated even after users delete them, using E-tags from the server.

**Cookie Security**

1. Stealing cookies: Inject XSS scripts.

2. Cross-Site Request Forgery (CSRF): More dangerous and easier. Attackers don't want your cookie; they want to make a request on your behalf using your cookie to their advantage. For example, if you are signed in to your bank, they may inject a script that makes a request to YOUR bank to transfer money. Mention of `samesite`.
