export const dynamic = 'force-dynamic'; // static by default, unless reading the request
export const runtime = 'edge'; 

export function GET(request: Request) {
    console.log('HELLO', request);
  return new Response(`Hello from ${process.env.VERCEL_REGION}`);
}