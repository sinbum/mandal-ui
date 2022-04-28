<script>
    import {storeName} from "../../../store.js";

    //sampleData()라고 사용 / 부모파일이 변수명으로 저장한 경우. 함수호출시.
    import {SampleData, makeMandalList} from './mandal';

    function getChildList(idx, dataObj) {
        let list;

        if (!dataObj) {
            alert('getChildList 가져오는중 오류발생');
            return
        }

        list = dataObj.childNodes[idx].childNodes;

        return list;

    }

    const sampleData = SampleData();
    //const bind = sampleData();
    console.log(SampleData())

</script>

<!-- -------------------------------------------------------------------------------------------------------------------------------------------- -->

<div class="container">
    <div class="grid_big">

        {#each SampleData().childNodes as node,idx (idx)}
            <!--    한묶음    -->
            <div class="grid_big_cell">
                <div class="grid_small">
                    {#if getChildList(idx, sampleData)}
                        {#each getChildList(idx, sampleData) as node,idx (node)}
                            <div class="grid_small_cell">{node.topic}</div>
                        {/each}
                    {/if}
                </div>
            </div>
            <!--    /한묶음끝    -->

        {/each}

    </div>

</div>

<!-- -------------------------------------------------------------------------------------------------------------------------------------------- -->

<style>
    .container {
        /*grid-template-columns: 130px 130px 130px;*/
        /*grid-template-rows: 130px 130px 130px;*/
        width: 100%;

    }

    .grid_small {
        border: 1px solid green;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);


    }

    [class*=grid_small_cell] {
        box-sizing: border-box;
        border: 2px solid black;
        border-radius: 2px;
        padding: 20px;

        position: relative;
    }

    .grid_big {
        border: 1px solid green;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);


    }

    [class*=grid_big_cell] {
        box-sizing: border-box;
        border: 2px solid black;
        border-radius: 2px;
        padding: 20px;

        position: relative;
    }

    /* Style for Extra Large Screen */
    @media (max-width: 3920px) {
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
    @media (max-width: 991px) {
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
    @media (max-width: 767px) {
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
    @media (max-width: 575px) {
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
            margin-top: 10px;
        }
    }
</style>
