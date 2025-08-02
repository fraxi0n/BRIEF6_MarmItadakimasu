const burgerExpend = document.getElementById("burger-expend")

const burger = {
   dom : document.getElementById("burger"),
   isOpen : false,
   isHover : false,
   isWatching : false,
   numSprite : 1,


   setOpen() { this.isOpen = !this.isOpen 
    if(this.isOpen){
        burgerExpend.classList.remove("is-hidden")
    }
    else 
    {
        burgerExpend.classList.add("is-hidden")
    }
    !this.isWatching&&this.watchTransition()
    }
    ,
    setHover(pIsHover) { this.isHover = pIsHover 
    !this.isWatching&&this.watchTransition()
    
    }
    ,

    changeFrame(inc)//+1 || -1
    {
        const transitionSpeed = 15
        this.numSprite+=inc
        this.dom.className = 'sprite-burger-'+this.numSprite
        setTimeout( ()=> this.watchTransition() , transitionSpeed)
    }
    ,

    watchTransition()
    {
        const nbSpriteTotal =13
        this.isWatching =true

        if (!this.isOpen && !this.isHover)
        {
            if (this.numSprite == 1)
            {
                this.isWatching = false ;return
            }
            else
            {
                this.changeFrame(-1)
            }
        }
        else
        {
            if (this.numSprite == nbSpriteTotal)
            {
                this.isWatching = false; return
            }
            else
            {
                this.changeFrame(1)
            }
        }
    },
}

burger.dom.addEventListener( 'mouseenter' , () =>burger.setHover(true))
burger.dom.addEventListener( 'mouseleave' , ()=>burger.setHover(false))
burger.dom.addEventListener( 'click' , ()=> burger.setOpen())

