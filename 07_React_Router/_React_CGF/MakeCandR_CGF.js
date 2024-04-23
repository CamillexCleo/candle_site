"use strict"; 

function MakeCand_CGF() {
    return (
        <div>
            <MakeCandR theCandType="Mold" scent="Lavendar" theWeight="9" imgURL="pics/candlemold.jpeg"
            imgObjList={[
                { "display":"Mold", "val":"pics/candlemold.jpeg"},
            {"display":"Tealight", "val": "pics/tealight.jpeg"},
            {"display":"Container", "val": "pics/container.jpeg"}
            ] }/>
            <MakeCandR theCandType="Waxmelt" scent="Vanilla" theWeight="4" imgURL="pics/waxmelt.jpeg"
            imgObjList={[
                { "display":"Mold", "val":"pics/candlemold.jpeg"},
            {"display":"Tealight", "val": "pics/tealight.jpeg"},
            {"display":"Container", "val": "pics/container.jpeg"}
            ] }/>
            <MakeCandR />
        </div>
    );

}