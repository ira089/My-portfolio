const SkillsImgitem = ({ item }) => {
  const { title, image, gitUrl, website } = item;
  return (
    <div className="collection">
      <h4>{title}</h4>

      <img className="collection__big" src={image} alt="projekt" />
      <a href={gitUrl} target="_blank">
        GitHub
      </a>
      <a href={website} target="_blank">
        Website
      </a>
    </div>
  );
};

export default SkillsImgitem;
