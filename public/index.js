const burgerExpend = document.getElementById("burger-expend");

const burger = {
  dom: document.getElementById("burger"),
  isOpen: false,
  isHover: false,
  isWatching: false,
  numSprite: 1,

  setOpen(isDefined) {
    console.log(isDefined)
    if (isDefined !== undefined)
    {
      this.isOpen = isDefined
    }
    else
    {
      this.isOpen = !this.isOpen;
    }

    if (this.isOpen) {
      burgerExpend.classList.remove("is-hidden");

      if ( searchInput.exp.style.display != "none")
      {
        searchInput.exp.focus()
      }

    } else {
      burgerExpend.classList.add("is-hidden");
    }
    !this.isWatching && this.watchTransition();
  },
  setHover(pIsHover) {
    this.isHover = pIsHover;
    !this.isWatching && this.watchTransition();
  },
  changeFrame(inc) {
    //+1 || -1
    const transitionSpeed = 70;
    this.numSprite += inc;
    this.dom.className = "sprite-burger-" + this.numSprite;
    setTimeout(() => this.watchTransition(), transitionSpeed);
  },
  watchTransition() {
    const nbSpriteTotal = 13;
    this.isWatching = true;

    if (!this.isOpen && !this.isHover) {
      if (this.numSprite == 1) {
        this.isWatching = false;
        return;
      } else {
        this.changeFrame(-1);
      }
    } else {
      if (this.numSprite == nbSpriteTotal) {
        this.isWatching = false;
        return;
      } else {
        this.changeFrame(1);
      }
    }
  },
};

burger.dom.addEventListener("mouseenter", () => burger.setHover(true));
burger.dom.addEventListener("mouseleave", () => burger.setHover(false));
burger.dom.addEventListener("click", () => burger.setOpen());

const recipeLinkArray = Array.from(document.getElementsByClassName("recipe-links"));

const searchInput = {

  main: document.getElementById("search-input-main"),
  exp: document.getElementById("search-input-exp"),
  value: "",
};

const linkFilter = (initialInput , isMain) => {
  const reworkString = (pValue) => {
    const letterAlias = [
      { letter: "a", alias: ["à", "á", "â", "ã", "ä", "å", "æ"] },
      { letter: "c", alias: ["ç", "ć", "ĉ", "č"] },
      { letter: "d", alias: ["ð", "đ"] },
      { letter: "recipeLink", alias: ["è", "é", "ê", "ë", "ė", "ę", "ē"] },
      { letter: "g", alias: ["ĝ", "ğ", "ģ"] },
      { letter: "h", alias: ["ĥ", "ħ"] },
      { letter: "i", alias: ["ì", "í", "î", "ï", "ĩ", "į", "ī"] },
      { letter: "j", alias: ["ĵ"] },
      { letter: "k", alias: ["ķ"] },
      { letter: "l", alias: ["ĺ", "ļ", "ľ", "ŀ", "ł"] },
      { letter: "n", alias: ["ñ", "ń", "ņ", "ň"] },
      { letter: "o", alias: ["ò", "ó", "ô", "õ", "ö", "ø", "œ", "ō"] },
      { letter: "r", alias: ["ŕ", "ŗ", "ř"] },
      { letter: "s", alias: ["ś", "ŝ", "ş", "š"] },
      { letter: "t", alias: ["ţ", "ť", "ŧ"] },
      { letter: "u", alias: ["ù", "ú", "û", "ü", "ũ", "ů", "ų", "ū"] },
      { letter: "w", alias: ["ŵ"] },
      { letter: "y", alias: ["ý", "ÿ", "ŷ"] },
      { letter: "z", alias: ["ź", "ż", "ž"] },
    ];

    const reworkChar = (pChar) => {
      let charReturned = pChar;

      letterAlias.forEach((letter) => {
        if (letter.alias.includes(pChar)) {
          charReturned = letter.letter;
          return;
        }
      });
      return charReturned;
    };

    const arrayV = Array.from(pValue.toLowerCase());

    const newArrayV = arrayV
      .map((char) => reworkChar(char))
      .filter((char) => char !== " ");
    return newArrayV.reduce((acc, curr) => {
      return acc + curr;
    }, "");
  };

  const inputValue = reworkString(initialInput.target.value);

  if(isMain)
  if (inputValue === "")
  {
    burger.setOpen(false)
  }
  else 
  {
    burger.setOpen(true)
  }

  recipeLinkArray.filter((recipeLink) => {
    const innertextRL = recipeLink.innerText.toLowerCase();

    const tolerentIncludes = (pTitle) => {

      const reworkTitle = reworkString(pTitle);

      return reworkTitle.includes(inputValue);
    };

    if (tolerentIncludes( innertextRL  ) ) {
      recipeLink.classList.remove("is-hidden");
    } else {
      recipeLink.classList.add("is-hidden");
    }
  });

};

searchInput.main.addEventListener("input", (initialInput)=> linkFilter(initialInput , true));

searchInput.exp.addEventListener("input", linkFilter);


