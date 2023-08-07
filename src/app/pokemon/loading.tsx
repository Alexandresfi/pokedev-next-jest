import ContentLoader from 'react-content-loader';

export default function Loading() {
  return (
    <main className="flex items-center justify-center h-[100vh] bg-black">
      <ContentLoader
        speed={2}
        width={360}
        height={640}
        viewBox="0 0 360 640"
        backgroundColor="#f2f2f2"
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="0" rx="0" ry="0" width="360" height="640" />
      </ContentLoader>
    </main>
  );
}
