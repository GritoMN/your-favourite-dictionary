import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p className="De">
              {definition.definition}
              <br />
              <p className="Ex">
                <em>{definition.example}</em>
              </p>
            </p>
          </div>
        );
      })}
    </div>
  );
}
