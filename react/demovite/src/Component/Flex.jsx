import React from 'react'

function Flex() {
    return (
        <div>
             {/* <div className='flex justify-start'>
                <div className="size-24 border-2">1</div>
                <div className="size-24 border-2">2</div>
                <div className="size-24 border-2">3</div>
            </div>
              <div className='flex justify-center'>
                <div className="size-24 border-2">1</div>
                <div className="size-24 border-2">2</div>
                <div className="size-24 border-2">3</div>
            </div>
            <div className='flex justify-between'>
                <div className="size-24 border-2">1</div>
                <div className="size-24 border-2">2</div>
                <div className="size-24 border-2">3</div>
            </div>
             <div className='flex justify-around'>
                <div className="size-24 border-2">1</div>
                <div className="size-24 border-2">2</div>
                <div className="size-24 border-2">3</div>
            </div>
              <div className='flex justify-end'>
                <div className="size-24 border-2">1</div>
                <div className="size-24 border-2">2</div>
                <div className="size-24 border-2">3</div>
            </div>
            <div className='flex'>
                <div className="size-24 border-2">1</div>
                <div className="size-24 border-2">1</div>
                <div className="size-24 border-2">1</div>
            </div>
               <div className='flex flex-row'>
                <div className="size-24 border-2">1</div>
                <div className="size-24 border-2">1</div>
                <div className="size-24 border-2">1</div>
            </div>

               <div className='flex flex-row-reverse'>
                <div className="size-24 border-2">1</div>
                <div className="size-24 border-2">2</div>
                <div className="size-24 border-2">3</div>
            </div>
            
            <div className='flex flex-col-reverse'>
                <div className="size-24 border-2">1</div>
                <div className="size-24 border-2">2</div>
                <div className="size-24 border-2">3</div>
            </div> */}
             <div className='flex flex-wrap justify-center gap-3'>
                <div className="size-36 border-2">
                    <img className='blur-sm' src="https://th.bing.com/th/id/OIP.Mvcr0QDsGXOx29cSBfXd6AHaE7?w=297&h=180&c=7&r=0&o=7&cb=ucfimgc2&dpr=1.5&pid=1.7&rm=3" style={{width:"100%",height:"100%"}} alt="" />
                </div>
                <div className="size-36 border-2">
                    <img className='brightness-100' src="https://th.bing.com/th/id/OIP.Mvcr0QDsGXOx29cSBfXd6AHaE7?w=297&h=180&c=7&r=0&o=7&cb=ucfimgc2&dpr=1.5&pid=1.7&rm=3" style={{width:"100%",height:"100%"}} alt="" />
                </div>
                <div className="size-36 border-2">
                    <img className='contrast-50' src="https://th.bing.com/th/id/OIP.Mvcr0QDsGXOx29cSBfXd6AHaE7?w=297&h=180&c=7&r=0&o=7&cb=ucfimgc2&dpr=1.5&pid=1.7&rm=3" style={{width:"100%",height:"100%"}} alt="" />
                </div>
                <div className="size-36 border-2">
                    <img className='grayscale-50' src="https://th.bing.com/th/id/OIP.Mvcr0QDsGXOx29cSBfXd6AHaE7?w=297&h=180&c=7&r=0&o=7&cb=ucfimgc2&dpr=1.5&pid=1.7&rm=3" style={{width:"100%",height:"100%"}} alt="" />
                </div>
                <div className="size-36 border-2">
                    <img className='hue-rotate-180' src="https://th.bing.com/th/id/OIP.Mvcr0QDsGXOx29cSBfXd6AHaE7?w=297&h=180&c=7&r=0&o=7&cb=ucfimgc2&dpr=1.5&pid=1.7&rm=3" style={{width:"100%",height:"100%"}} alt="" />
                </div>
                
                <div className="size-36 border-2 bg-[rgba(0,0,0,0.5)] rotate-45">3</div>
                <div className="size-36 border-2 scale-75">1</div>
                <div className="size-36 border-2 text-[50px]">2</div>
                <div className="size-36 border-2 skew-6">3</div>
                <div className="size-36 border-2 -translate-6">1</div>
                <div className="size-36 border-2 hover:text-5xl hover:bg-amber-400 hover:text-white">2</div>
                <div className="size-36 border-2">3</div>
                <div className="size-36 border-2">1</div>
                <div className="size-36 border-2">2</div>
                <div className="size-36 border-2">3</div>
                <div className="size-36 border-2">1</div>
                <div className="size-36 border-2">2</div>
                <div className="size-36 border-2">3</div>
                <div className="size-36 border-2">1</div>
                <div className="size-36 border-2">2</div>
                <div className="size-36 border-2">3</div>
                  <div className="size-36 border-2">1</div>
                <div className="size-36 border-2">2</div>
                <div className="size-36 border-2">3</div>
            </div>

            <button class="bg-violet-500 hover:bg-red-400 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 ...">
  Save changes
</button>


             {/* <div className='grid grid-cols-3'>
                <div className=" border-2">1</div>
                <div className=" border-2 col-span-2 row-span-3">2</div>
                <div className=" border-2">3</div>
               <div className=" border-2">1</div>
                <div className=" border-2">2</div>
                <div className=" border-2">3</div>
                <div className=" border-2">1</div>
                <div className=" border-2">2</div>
                <div className=" border-2">3</div>
                
            </div> */}

        </div>
    )
}

export default Flex
