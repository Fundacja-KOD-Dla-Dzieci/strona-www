// Cloudflare Pages Function to block access to documentation files
export async function onRequest(context: {
  request: Request;
  next: () => Promise<Response>;
}): Promise<Response> {
  const url = new URL(context.request.url);
  const pathname = url.pathname;

  // Block access to .md files (except README.md)
  if (pathname.endsWith('.md') && !pathname.endsWith('README.md')) {
    return new Response('Not Found', { status: 404 });
  }

  // Block access to config files
  if (pathname.includes('.env.example') || 
      pathname.includes('.gitignore') || 
      pathname.includes('.mailmap') ||
      pathname.includes('wrangler.toml') ||
      pathname.includes('package.json')) {
    return new Response('Not Found', { status: 404 });
  }

  return context.next();
}
