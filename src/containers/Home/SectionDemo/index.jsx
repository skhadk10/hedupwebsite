import Demo from "./Demo";

const SectionDemo = ({data}) => {

  return (
    <div className="row">
      {data && data.map((item , key) => (
          <Demo
            key={key}
            img={item.img}
            path={item.path}
            lastPage={item.lastPage}
            lastLinkNav={item.lastLinkNav}
            checkLinkPage={item.checkLinkPage}
            checkLinkNav={item.checkLinkNav}
            Viewdemo={item.Viewdemo}
            nameLinkNav={item.nameLinkNav}
          />
        ))}
    </div>
  );
}

export default SectionDemo;
