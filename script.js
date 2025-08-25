console.log("script works")
const likebtn = document.getElementById('play-btn')

const r = new rive.Rive({
    src: "like-btn.riv",
    canvas: document.getElementById("canvas"),
    autoplay: true,
    stateMachines: 'mystate',
    onLoad: () => {
        r.resizeDrawingSurfaceToCanvas();
        
        likebtn.addEventListener('click', function () {
            const inputs = r.stateMachineInputs('mystate');
            inputs.forEach(i => {
                // const inputName = i.name;
                // const inputType = i.type;
                if (i.value == true) {
                    console.log("on")
                    i.value = false;
                }
                else {
                    console.log("off")
                    i.value = true;
                }
            });

        })
    },
});

