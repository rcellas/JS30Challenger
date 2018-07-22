 window.addEventListener('keydown',function(e){
            const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
            const key = document.querySelector (`.key[data-key="${e.keyCode}"]`)
            if(!audio) return; //stop function
            audio.currentTime= 0; //rewind to start
            audio.play();
            key.classList.add('playing');
            // console.log(e.keyCode);
            // console.log(audio);
        });


        function removeTransition(e){
            if (e.propertyName !=='transform') return;
            this.classList.remove('playing')
            console.log(this);
            }
        
        const keys = document.querySelectorAll('.key');
        keys.forEach(key => key.addEventListener('transitionend',removeTransition));
        // const keys = document.querySelectorAll('.key');
        // keys.forEach(key => key.addEventListener('transitionend', removeTransition));