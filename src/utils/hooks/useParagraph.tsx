const urlReg = /(http(s)?:\/\/)([a-z0-9\w]+\.*)+[a-z0-9]{2,4}/gi;
const altURL = (sentence: string) =>
  urlReg.test(sentence) ? (
    <>
      {" "}
      <a href={sentence} target="_blank" className="text-mainBlue underline">
        {sentence}
      </a>
    </>
  ) : (
    ` ${sentence}`
  );

const useParagraph = (content: string) => {
  return (
    <>
      {content.includes("\n") ? (
        content.split("\n").map((line, idx) => (
          <span key={idx} className="break-all">
            {line.split(" ").map(sentence => altURL(sentence))}
            <br />
          </span>
        ))
      ) : (
        <span>{content.split(". ").map(sentence => altURL(sentence))}</span>
      )}
    </>
  );
};

export default useParagraph;
