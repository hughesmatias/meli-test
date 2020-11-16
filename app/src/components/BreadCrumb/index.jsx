const BreadCrumb = ({ data }) => (
  <ul className="breadcrumb">
    {data.map((cat, index) => (
      <>
        {!!index && <li>{" > "}</li>}
        <li className={data.length - 1 === index && "last"}>{cat.name}</li>
      </>
    ))}
  </ul>
);

export default BreadCrumb;
