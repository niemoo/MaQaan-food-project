import '@fontsource/nunito/500.css';

const MenuList = ({ href, children }) => {
  return (
    <>
      <div className="bg-white rounded py-1 px-3 hover:bg-emerald-600 hover:text-white">
        <a href={`${href}`}>{children}</a>
      </div>
    </>
  );
};

export default MenuList;
