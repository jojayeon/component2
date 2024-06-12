const tagMaker = (tagName, attributes = {}, children = "") => {
  const attrsToString = (attrs) => {
    const attrsArray = Object.entries(attrs);
    const attrsString = attrsArray.map((attr) =>{
      return attr[0] + '="' + attr[1] + '"';
    });
    return attrsString.join(" ")
  }
  const attrsString = attersToString(attributes);

  let childrenString;
  if (Array.inArray(children)) {
    childrenString = children.join("");
  } else
}