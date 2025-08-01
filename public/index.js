//todo mettre la fonction de burger open / close de
console.log("js coté client , coucou") 

let itest = 0
const burger = {
   dom : document.getElementById("burger"),
   isOpen : false,
   isHover : false,
   numSprite : 1,
   nbSpriteTotal : 13,
   isWatching : false,

   setOpen() { this.isOpen = !this.isOpen 
    !this.isWatching&&this.watchTransition()
    }
    ,
    setHover(pIsHover) { this.isHover = pIsHover 
    !this.isWatching&&this.watchTransition()
    console.log("hover ="+ this.isHover)
    }
    ,

    watchTransition()
    {
        itest++
        console.log ("watching "+itest)
        this.isWatching =true
        if (!this.isOpen && !this.isHover)
        {
            if (this.numSprite == 1)
            {
                this.isWatching = false 
                return
            }
            else
            {
                this.numSprite--
                console.log(this.numSprite)
                setTimeout( this.watchTransition() , 200)
            }


        }
        else
        {
            if (this.numSprite == this.nbSpriteTotal)
            {
                this.isWatching = false 
                return
            }
            else
            {
                
                this.numSprite++
                console.log(this.numSprite)
                setTimeout( this.watchTransition() , 200)
            }
        }
        
    },


   burgerFuse(){},
   burgerSpread(){},


}

burger.dom.addEventListener( 'mouseenter' , () =>burger.setHover(true))
burger.dom.addEventListener( 'mouseleave' , ()=>burger.setHover(false))
burger.dom.addEventListener( 'click' , ()=> burger.setOpen())

