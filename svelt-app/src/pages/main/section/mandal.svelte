<script>
import getResponseSample from "../../../sampleDatas.js";
import {
    storeName
} from "../../../store.js"

export let color = 'black';

const handleClick = (prop) => {
    if (prop.color == 'black') {
        color = 'blue';
    } else {
        color = 'black';
    }
};

let datas = ['apple', 'banana', 'orange', 'pear', 'peach', 'coconut', 'tomato', 'strawberry', 'rasberry', ];
let response = JSON.parse(getResponseSample());
console.log(response);

const makeArray = (mandalList) => {
    const result = [];
    for (let idx = 1; idx < 9; idx++) {

        if (idx === 5) {
            result.push('center topic')
        }
        result.push(mandalList[idx])
    }
    return result;
}


const mandalList = makeArray(datas);
</script>

<!-- -------------------------------------------------------------------------------------------------------------------------------------------- -->

<div class = "container">
        <div class="h1 text-secondary">Hello >> {$storeName}</div>

    <div class="row">
        {#each mandalList as box,idx (box)}
        <!-- <button class="col-4">{box}</button>	 -->
        <div class="col-4">
            <!-- <button type="button" class="btn btn-primary btn-square-md">{box}</button>		 -->
            <button type="button" class="btn btn-light btn-sq-responsive">{box}</button>
        </div>
        {/each}
    </div>

</div>

<!-- -------------------------------------------------------------------------------------------------------------------------------------------- -->

<style>
.mainWrap {
    text-align: center;
    padding: 1em;
    max-width: 100%;
    margin: 0 auto;
}

/* h1 {

color: #ff3e00;

text-transform: uppercase;

font-size: 4em;

font-weight: 100;

} */

.mandals {
    width: 100%;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    padding: 10px 10px;
    margin: 10px;
    opacity: 1;
    position: relative;
    overflow: hidden;
}

.mandal {
    position: relative;
    float: left;
    width: 30%;
    padding-bottom: 25%;
    /* height: 30%; */
    background: rgba(129, 213, 148, 0.8299999833106995);
    font-size: larger;
    /* margin: 5px; */
}

/* Style for Extra Large Screen */
@media (max-width:3920px) {
    .btn-sq-responsive {
        width: 250px !important;
        max-width: 100% !important;
        max-height: 100% !important;
        height: 250px !important;
        font-size: 24px;
        margin-top: 70px;

    }
}

/* Style for Large Screen */
@media (max-width:991px) {
    .btn-sq-responsive {
        width: 200px !important;
        max-width: 100% !important;
        max-height: 100% !important;
        height: 200px !important;
        font-size: 18px;
        margin-top: 50px;

    }
}

/* Style for Medium Screen */
@media (max-width:767px) {
    .btn-sq-responsive {
        width: 150px !important;
        /* whatever width you want for medium screen */
        max-width: 100% !important;
        max-height: 100% !important;
        height: 150px !important;
        /* whatever height you want for medium screen */
        font-size: 12px;
        margin-top: 30px;
    }
}

/* Style for Small Screen */
@media (max-width:575px) {
    .btn-sq-responsive {
        width: 130px !important;
        /* whatever width you want for mobile screen */
        max-width: 100% !important;
        max-height: 100% !important;
        height: 130px !important;
        /* whatever height you want for mobile screen */
        font-size: 5px;
        padding: 0px;
        font-size: 7px;
        margin-top: 20px;
    }
}
</style>
