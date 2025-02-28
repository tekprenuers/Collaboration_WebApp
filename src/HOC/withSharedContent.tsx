import Bulb from "../../src/assets/vector-illustration/bulb.png";
//------------------------------------------Template_Footer
const Template_Footer: React.FC = () => {
  return (
    <section className="p-5">
      <div className="flex flex-col items-center text-center mb-10">
        <img src={Bulb} alt="Bulb" className="" />
        <h2 className="text-[#293745] text-2xl md:text-3xl max-w-3xl font-bold font-poppins">
          Headerfy has professionally designed templates for everyday need:
        </h2>
      </div>
    </section>
  );
};


// HOC that wraps a component with Header & Footer
const withSharedContent = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  return (props: P) => (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <WrappedComponent {...props} />
      </main>
      <Template_Footer />
    </div>
  );
};
export default withSharedContent;
