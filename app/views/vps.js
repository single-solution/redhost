<?php
include("header.php");
?>

<!--breadcrumb area start-->
<section class="breadcrumb-area bg-primary-gradient">
    <div class="container">
        <div class="breadcrumb-content text-center">
            <h2 class="mb-3">Servere virtuale (VPS)</h2>
            <nav>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li class="breadcrumb-item active">VPS</li>
                </ol>
            </nav>
        </div>
    </div>
</section>
<!--breadcrumb area end-->
<!--about section start-->
<section class="dm-about-section ptb-120 position-relative zindex-1 overflow-hidden" style="background-color:  !important;">

    <img src="assets/img/shapes/dm-about-bg.png" alt="shape" class="position-absolute right-bottom">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-6">
                <div class="section-title text-center">
                    <h2 data-aos="fade-down">Servere virtuale (VPS)</h2>
                </div>
            </div>
        </div>
        <div class="row mt-5 align-items-center justify-content-between">
            <div class="col-lg-6" data-aos="fade-right">
                <div class="dm-about-content mt-40 mt-lg-0">
                    <!-- <h3 class="mb-4">Domenii gratuite via RedHost</h3> -->
                    <p>Puteti folosi un VPS (un server virtual) in cazul in care site-ul dvs a depasit ca necesitati serverele de gazduire shared (gazduire web normala). Deci un VPS este recomandat in urmatoarele cazuri:</p>
                    <ul class=" mb-2 feature-list">
                        <li><b>1.</b> doriti sa aveti libertatea de a instala diverse softuri care nu sunt disponibile in mod normal pe serverele shared;</li>
                        <li><b>2.</b> doriti sa aveti acces ROOT (superutilizator);</li>
                        <li><b>3.</b> aveti cunostinte de administrare Linux</li>
                    </ul>
                    <p class="mb-2">Un VPS este practic un server dedicat cu resurse fizice considerabil mai mici dar si la un pret mult mai mic. Puteti instala orice control panel si orice soft sau extensie dorita.</p>
                </div>
            </div>

            <div class="col-lg-5 order-1 order-lg-2" data-aos="fade-left">
                <div class="dm-about-img">
                    <img src="assets/img/server-virtual.svg" alt="man" class="img-fluid">
                </div>
            </div>
        </div>
    </div>
</section>
<!--about section end-->
<!--pricing plan table-->
<section class="cd-plan-table ds-bg pb-120 pt-120" style="background-color: #fff !important;">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-7">
                <div class="cd-title text-center">
                    <h2 data-aos="fade-right" class="mb-3">VPS-uri KVM</h2>
                    <p data-aos="fade-left" class="mb-0">Recomandate pentru majoritatea aplicatiilor uzuale, VPS-urile KVM se remarca printr-o viteza de regula foarte buna si o izolare mult mai buna intre VPS-uri (la nivel de alocari de resurse). Alocarile de resurse de sistem sunt garantate. Infrastructura pe SSD-uri asamblate in matrice RAID-10 asigura o performanta foarte buna. Pe VPS-urile KVM se poate instala si Windows.</p>
                </div>
            </div>
        </div>
        <div class="col-sm-12 my-4   p-4 bg-white box-shadow-border " id="show_table" data-aos="fade-up">
                                    <table id="fixed-header" class="table m-0 rs-head-table  dt-responsive nowrap  align-middle dataTable no-footer dtr-inline" style="width: 100%;" aria-describedby="fixed-header_info">
                                    <thead>
            <tr style="background-color:whitesmoke ;" >
                        <th></th>
                        <th >
                            <span class="plan-title">KVM-1</span></span>
                        </th>
                        <th>
                            <span class="plan-title">KVM-2</span></span>
                        </th>
                        <th>
                            <span class="plan-title">KVM-3</span></span>
                        </th>
                        <th>
                            <span class="plan-title">KVM-4</span></span>
                        </th>
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <td>RAM garantat</td>
                        <td>4GB</td>
                        <td>8GB</td>
                        <td>12GB</td>
                        <td>16GB</td>
                    </tr>
                    <tr>
                        <td>Nr. vCPU-uri</td>
                        <td>2</td>
                        <td>4</td>
                        <td>6</td>
                        <td>8</td>
                    </tr>
                    <tr>
                        <td>Spatiu</td>
                        <td>45GB</td>
                        <td>90GB</td>
                        <td>180GB</td>
                        <td>360GB</td>
                    </tr>
                    <tr>
                        <td>Trafic</td>
                        <td>250GB</td>
                        <td>500GB</td>
                        <td>750GB</td>
                        <td>1000GB</td>
                    </tr>
                    <tr>
                        <td>cPanel (1 cont)</td>
                        <td>11.99€ lunar</td>
                        <td>11.99€ lunar</td>
                        <td>11.99€ lunar</td>
                        <td>11.99€ lunar</td>
                    </tr>
                    <tr>
                        <td>Pret lunar</td>
                        <td>12.99 Euro</td>
                        <td>24.99 Euro</td>
                        <td>47.99 Euro</td>
                        <td>69.99 Euro</td>
                    </tr>
                </tbody>

            </table>
        </div>
        <p class="mt-50">Preturile NU includ TVA.</p>
        <div class="row justify-content-center">
            <div class="col-lg-7">
                <div class="cd-title text-center">
                    <h2 class="mb-3">Pentru a comanda un VPS va rugam sa ne contactati prin e-mail!</h2>
                </div>
            </div>
        </div>
    </div>
</section>
<!--pricing plan table end-->
<?php include('footer.php') ?>