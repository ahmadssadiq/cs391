import UrlForm from "../pages/components/UrlForm";

export default function Home() {
  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>URL Shortener</h1>
      <UrlForm />
    </div>
  );
}

const containerStyle: React.CSSProperties = {
  textAlign: 'center' as const,
  marginTop: '50px',
};

const headingStyle: React.CSSProperties = {
  fontSize: '32px',
  marginBottom: '20px',
};