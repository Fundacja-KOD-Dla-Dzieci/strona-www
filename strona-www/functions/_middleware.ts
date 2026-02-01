// Cloudflare Pages Middleware to block access to documentation and config files
export async function onRequest(context: {
  request: Request;
  next: () => Promise<Response>;
}): Promise<Response> {
  const url = new URL(context.request.url);
  const pathname = url.pathname;

  // Block access to .md files (except README.md)
  if (pathname.endsWith('.md') && !pathname.endsWith('/README.md') && !pathname.endsWith('README.md')) {
    return new Response('Not Found', { status: 404 });
  }

  // Block access to config files
  const blockedPaths = [
    '.env.example',
    '.gitignore',
    '.mailmap',
    'wrangler.toml',
    'package.json',
    'package-lock.json',
    '.cfignore'
  ];
  
  for (const blocked of blockedPaths) {
    if (pathname.includes(blocked)) {
      return new Response('Not Found', { status: 404 });
    }
  }

  return context.next();
}
