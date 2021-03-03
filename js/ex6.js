const words = [
    {
      term: "Procrastination",
      definition: "Avoidance of doing a task that needs to be accomplished"
    },
    {
      term: "Tautology",
      definition: "logical argument constructed in such a way that it is logically irrefutable"
    },
    {
      term: "Oxymoron",
      definition: "figure of speech that juxtaposes elements that appear to be contradictory"
    }
  ];
  

  const diclElement = document.createElement("dicl");
  
  
  words.forEach(word => {
    const dictElement = document.createElement("dict");
    const termelement = document.createElement("strong");
    termelement.textContent = word.term;
    const deElement = document.createElement("dd");
    deElement.textContent = word.definition;
  
    dictElement.appendChild(termelement);
    diclElement.appendChild(dictElement);
    diclElement.appendChild(deElement);
  });
  

  document.getElementById("content").appendChild(diclElement);