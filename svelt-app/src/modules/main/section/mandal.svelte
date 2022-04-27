<script>
    import {storeName} from "../../../store.js";

    //sampleData()라고 사용 / 부모파일이 변수명으로 저장한 경우. 함수호출시.
    import {sampleData, makeMandalList} from './mandal';

    const bind = makeMandalList(sampleData());
    const mandalList = [...bind];

</script>

<!-- -------------------------------------------------------------------------------------------------------------------------------------------- -->

<div class="container">
    <div class="h1 text-secondary">My mandal >> {$storeName}</div>

    <div class="row">
        {#each mandalList as box,idx (box)}
            <!-- <button class="col-4">{box}</button>	 -->
            <div class="col-4">
                <!-- <button type="button" class="btn btn-primary btn-square-md">{box}</button>		 -->
                <button type="button" class="btn btn-light btn-sq-responsive"
                        value={box.idxLocation}>{box.topic}</button>
            </div>
        {/each}
    </div>

</div>

<!-- -------------------------------------------------------------------------------------------------------------------------------------------- -->

<style>

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
            margin-top: 20px;
        }
    }
</style>
