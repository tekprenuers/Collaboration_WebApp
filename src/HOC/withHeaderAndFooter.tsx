import { Footer } from "./footer";
import { Header } from "./header";
import LoginAndSignup from "./LoginAndSignup";

const withHeaderAndFooter = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  return (props: P) => (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <WrappedComponent {...props} />
      </main>
      <Footer />
      <LoginAndSignup />
    </div>
  );
};

export default withHeaderAndFooter;
