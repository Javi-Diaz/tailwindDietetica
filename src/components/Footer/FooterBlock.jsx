import { useInView } from "../../hooks/useInView.jsx"

function FooterBlock({ children, animation, classes = ""}) {
  const [ref, visible] = useInView({ threshold: 0.5 });
  console.log(classes)
  return (
    <div
      ref={ref}
      className={`${classes} ${visible ? animation : "opacity-0"} `}
    >
      {children}
    </div>
  );
}

export default FooterBlock;