const New = ({ positionOfText = "md" }) => {
  return (
    <span
      className={`text-primary uppercase tracking-[10px] mb-4 block text-sm text-center ${positionOfText}:text-left`}
    >
      New Product
    </span>
  );
};

export default New;
