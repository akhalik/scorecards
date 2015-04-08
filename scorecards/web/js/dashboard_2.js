var favlocationsValues = null,favlocationsOptions = null;
var SavedQueryIds=null,SavedQueries=null;
var totalImageCount=new Array();
var click_count=new Array();
var startIndex=new Array();
var g_thumbHtml=new Array();
var images=0;
var aboutPhoto=0;
var descriptions=0;
var ImageFolder=0;
var DashboardImages=0;
var ReportDesc=0;
var LocError="The requested location was not found. Therefore the below report is presenting information for All Locations.  Kindly check spelling and try again."

function storeWindow(divID){
    var windowContent = null;

    windowContent =             
'                        <div class="col-md-12 col-lg-8 col-sm-12 col-xs-12 center">'+
'                        <div class="blockArea2">'+
'                             <div class="tab-content">'+
'                             <div class="tab-pane active" id="store1">'+
'                                  <div class="blockHeader">     '+
'                                       <div class="fl">'+
'                                          <h3 id="storename">Adarsh Aircon, T Nagar</h3>'+
'                                       </div>'+
'                                       <div class="fr">'+
'                                          <ul class="nav nav-tabs">'+
'                                                <li id="table_li'+divID+'" class="active"><a href="#table'+divID+'" data-toggle="tab" class="listchart"></a></li>'+
'                                                <li id="images_li'+divID+'"><a href="#images'+divID+'" data-toggle="tab" class="images last"></a></li>'+
'                                          </ul>'+
'                                       </div>'+
'                                       <div class="clearfix"></div>'+
'                                  </div>'+
'                             <div class="tab-content">'+
'                                  <div class="tab-pane active" id="table'+divID+'">'+
'                                       <div class="storeScorecard">'+
'                                       <h4><strong>Scorecard</strong> - October 2014</h4>'+
'                                       <table class="numbersTable" id="ntable'+divID+'" style="float:left;width:100%" ><tr><td></tr></td><tr><td></tr></td><tr><td><h4>Loading Scorecard. Please wait...</h4></td></tr><tr><td></tr></td><tr><td></tr></td></table>'+
'                                       </div>'+
'                                       <h4 style="float:left; display:block; margin-top:15px; width:100%;"><strong>Store Detail</strong></h4>    '+
'					<table id="store_contact" style="float:left;width:100%"> '+
'                                       </table>'+
'                                  </div>'+
'                                  <div class="tab-pane" id="images'+divID+'">'+
'                                            <ul class="gallery" id="thumb'+divID+'">'+
'                                            <li><a href="images/photogallery/img-1.jpg"><img src="images/photogallery/thumb_img-1.jpg" alt="Image" class="img-responsive"></a></li>'+
'                                            <li><a href="images/photogallery/img-1.jpg"><img src="images/photogallery/thumb_img-1.jpg" alt="Image" class="img-responsive"></a></li>'+
'                                            <li><a href="images/photogallery/img-1.jpg"><img src="images/photogallery/thumb_img-1.jpg" alt="Image" class="img-responsive"></a></li>'+
'                                            <li><a href="images/photogallery/img-1.jpg"><img src="images/photogallery/thumb_img-1.jpg" alt="Image" class="img-responsive"></a></li>'+
'                                            </ul>'+
'                                  </div>'+
'                             </div>'+
'                             </div>'+
'                             </div>'+
'               	 </div>'+
'               	 </div>';

    return windowContent;
}

/* Funciton Used to set the window dynamic html for multiple windows  */
function windowContent(WindowType,divID){
    var windowContent = null;

    windowContent = 
'                <!--block1-->'+
'                <div class="col-md-6 col-lg-6 col-sm-12 col-xs-12 top5">'+
'                <!-- Block-->'+
'                  <div class="blockArea marTop">'+
'                       <div class="blockHeader">     '+
'                            <div class="fl">'+
'                                <h3><p class="WidgetTitle'+divID+'">Test Title </p></h3>'+
'                             </div>'+
'                            '+
'                            <div class="fr">'+
'                            <ul class="nav nav-tabs">'+
'                                <li class="active" id="piechart_li'+divID+'"><a href="#piechart'+divID+'" data-toggle="tab" class="piechart"></a></li>'+
'                                <li id="table_li'+divID+'"><a href="#table'+divID+'" data-toggle="tab" class="listchart"></a></li>'+
'                                <li id="images_li'+divID+'"><a href="#images'+divID+'" data-toggle="tab" class="images last"></a></li>'+
'                            </ul>'+
'                            </div>'+
'                         <div class="clearfix"></div>'+
'                       </div>'+
'                    <div class="tab-content">'+
'                      <div class="tab-pane active" id="loading'+divID+'">'+
'                          <div style="width: 100%; height: 100%;"> <p> Loading. Please wait ... </p></div>'+
'                      </div>'+
'                      <div class="tab-pane" id="piechart'+divID+'">'+
'                          <div id="chartarea'+divID+'" style="width: 100%; height: 100%;"></div>'+
'                      </div>'+
'                      <div class="tab-pane" id="table'+divID+'">'+
//'                          <div id="table_div_bar'+divID+'" style="width: 100%;"></div>'+
'                      <table class="numbersTable" id="ntable'+divID+'" style="float:left;width:100%" ></table>'+
'                      </div>'+
'                      <div class="tab-pane" id="images'+divID+'">'+
'                         <ul class="gallery" id="thumb'+divID+'">'+
'			     <li><a href="images/photogallery/img-1.jpg"><img src="images/photogallery/thumb_img-1.jpg" alt="Image" class="img-responsive"></a></li>'+
'                            <li><a href="images/photogallery/img-1.jpg"><img src="images/photogallery/thumb_img-1.jpg" alt="Image" class="img-responsive"></a></li>'+
'			  </ul>'+
'                        '+
'                      </div>'+
'                  </div>'+
'                   '+
'                   <div class="contFooter" id="shortnotes'+divID+'">'+
'                      <p class="viewinCont" id="viewinCont'+divID+'">'+
'                         Please wait while details related to this query are loaded ...'+
'                      </p>'+
'                      <div class="detail"><a onclick="javascript:void(0)" id="'+divID+'">Notes</a></div>'+
'                      <div class="clearfix"></div>'+
'                   </div>'+
'                   <div class="viewInsights" id="viewInsights-'+divID+'">'+
'                       <div class="inner">'+
'                      	<h4><strong>Notes</strong></h4>'+
'                       <p id="notestable'+divID+'" style="float:left;width:100%" > </p>'+
'                       <div class="cross"><a onclick="javascript:void(0)" id="'+divID+'">Close</a></div>'+
'                       <div id="addin-'+divID+'" class="addinputbox"><form><input id="note-'+divID+'" type="text" class="inputadd" ><button class="custombtn btn-warning-custom" type="button" id="'+divID+'" onclick="javascript:void(0)">Add</button></form></div>'+
'                       '+
'                   </div>'+
'                   </div>'+
'                  </div>'+
'                <!-- Block-->'+
'            </div>'+
'                      <!--block1-->';


    return windowContent;
}

function populateStoreDirectory() {
    var loc = $('#place').val();
    var list="";
    //var rowSelect = $('#numbers_div'+dialogId).find('.rowselect'+dialogId).children(":selected").attr("value");
    //if(typeof rowSelect=='undefined') rowSelect='';
   // var arguments = 'detailsRequest={"QueryId":"stores","requestType":"widgetnumbers","filter":"'+""+'","location":"'+loc+'","dateRange":"'+""+'"}';
      var requestData = {};
   requestData.queryId = "stores";
   requestData.requestType = "widgetnumbers";
   requestData.filter = "";
   requestData.location = loc;
   requestData.dateRange = "";
    var tabledata = null;
    
    $.ajax({  
        type: "POST",  
        cache:false,
        data:JSON.stringify(requestData),
        async:false,
       // url: "DetailsController",  
          url: "DetailsController/WidgetDataTable.action",
        dataType: "json",
        contentType: 'application/json',
    }).done(function(res) {
        if(res.errorMessage){
             alert(res.errorMessage);
             return;
        }
        tabledata = res.dataTable;
    }); 
    
    //$('.Detail'+dialogId).find(' .numbersTable table tbody').append(row);
    for(var i = 1; i<tabledata.length;i++){
        var rowitems = tabledata[i];
        list += '<li><a href="#" onclick="openStoreWindow(\''+rowitems[0]+'\', \''+rowitems[1]+'\', \''+rowitems[2]+'\')" data-toggle="tab">' + rowitems[1] + '</a></li>';
    }
    
    $('#storelist').html(list);	
        
    $(function(){
        $(".navbar-collapse ul li ul li a").click(function(){
                $(".navbar-collapse").collapse('toggle');
        });
    });
}

function openStoreWindow(filter, storeName, storeContact) {
    var htmlcontent = storeWindow(0);
    $("#StoreWindow").html(htmlcontent);

    //Assign store name
    $('#storename').text(storeName);    
    
    $('#store_contact').html(storeContact);
    
    //Fetch store detail - name, location, scores, etc
    getWidgetTable(filter, "scorecard", 0);
    
    //Fetch store photos
    if(DashboardImages=='No') {
        $('#images_li'+0).css("display", "none");
    } else {
        getWidgetPhotos(filter, "scorecard", 0);
    }
    
    
    $('#dashboard').removeClass('active');
    $('#StoreWindow').addClass('active');
}

function activate_dashboard() {
    
    $('#dashboard').addClass('active');
    $('#StoreWindow').removeClass('active');
    
    $(".navbar-collapse").collapse('toggle');
}

function set_toptext(content, err) {
    // Configure/customize these variables.
    var showChar = 100; // How many characters are shown by default
    var ellipsestext = "...";
    var moretext = "See More";
    var lesstext = "See Less";
    
    if(err==1) {
        $('.toptext').css("color", "red");
    } else {
        $('.toptext').css("color", "black");
    }
    
    $('.more').each(function() {
        //var content = $(this).html();
 
        if(content.length > showChar) {
 
            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);
 
            var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
 
            $(this).html(html);
        }
 
    });
 
    $(".morelink").click(function(){
        if($(this).hasClass("less2")) {
            $(this).removeClass("less2");
            $(this).html(moretext);
        } else {
            $(this).addClass("less2");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
}
/* Funciton Used to intialize the window into Html DOM and contents related to the Window
 * And function calls based on request
 * */
//var dialogId = 1;
function CreateDashboardWidgets()
{
    var configData= null;
    $.ajax({  
        type: "POST",  
        cache:false,
        async:false,
        data:"detailsRequest",
        url: "ClientController/GetConfig.action",  
        
     
        success: function(){
        }
    }).done(function(res) {
        if(res.errorMessage){
        
        alert(res.errorMessage);
        return;
    }
        configData = res.configData;
    });
    configData = JSON.parse(configData); // TODO: Excpetion handling
    ReportDesc = configData[0].ReportDesc;
    DashboardImages = configData[0].DashboardImages;
    SavedQueryIds = configData[0].QueryIds.split(",");
    SavedQueries = configData[0].Queries.split(",");
    ImageFolder = configData[0].ImageFolder;
            
    //Set report description - toptext
    set_toptext(ReportDesc,0);
        
    //for(var i=1;i<=3;i++){  
    for(var i=1;i<=SavedQueryIds.length;i++){  
        //Create Widget Shell
        var htmlcontent = windowContent("Widget",i);
        $("#dashboard").append(htmlcontent);
        
        //Set title
        $('.WidgetTitle'+i).text(SavedQueries[i-1]);
                
        //Create pie chart
        getWidgetChart(SavedQueryIds[i-1],i);
        
        //Fetch photos
        if(DashboardImages=='No') {
            $('#images_li'+i).css("display", "none");
        } else {
            getWidgetPhotos("tags like '%"+SavedQueryIds[i-1]+"%'", SavedQueryIds[i-1],i);
        }        
        //Fetch table
        getWidgetTable("",SavedQueryIds[i-1],i);     
        
        //Fetch Notes
        submitNote("",i);
    }
    $(".detail a").click(function(){
        var id =  $(this).attr("id");
        $("#viewInsights-"+id).animate({ bottom: '0' }, 500);
    });

    $(".cross a").click(function(){
        var id =  $(this).attr("id");
        $("#viewInsights-"+id).animate({ bottom: '-200%'}, 500);
    });

    $(".addin a").click(function(){
        var id =  $(this).attr("id");
        $("#addin-"+id).animate({ left: '0' }, 500);
    });
    
    $(".addinputbox form button").click(function(){
        var id =  $(this).attr("id");
        var note = $('#note-'+id).val();
        if(note!="") {
            //Submit input text
            //alert(note+id);
            submitNote(note,id);
        }
    });
}

/* Funciton Used to intialize the window into Html DOM and contents related to the Window
 * And function calls based on request
 * */
//var dialogId = 1;
function RefreshDashboardWidgets()
{
    //for(var i=1;i<=3;i++){  
    for(var i=1;i<=SavedQueryIds.length;i++){  
        
        //Clean the slate.  Set loading
        $('#table'+i).removeClass('active');
        $('#piechart'+i).removeClass('active');
        $('#table_li'+i).removeClass('active');
        $('#piechart_li'+i).removeClass('active');
        $('#loading'+i).addClass('active');
        //Set short notes
        //$('#viewinCont'+i).text("XXXXXXXXXXXXXX");
        
        //Create pie chart
        getWidgetChart(SavedQueryIds[i-1],i);
        
        //Fetch photos
        if(DashboardImages=='No') {
            $('#images_li'+i).css("display", "none");
        } else {
            getWidgetPhotos("tags like '%"+SavedQueryIds[i-1]+"%'", SavedQueryIds[i-1],i);
        }        
        
        //Fetch table
        getWidgetTable("",SavedQueryIds[i-1],i);
        
        //Fetch Notes
        submitNote("",i);        
    }    
}

function getWidgetTable(filter, QueryId, dialogId){
    var loc = $('#place').val();
    //var arguments = 'detailsRequest={"QueryId":"'+QueryId+'","requestType":"widgetnumbers","filter":"'+filter+'","location":"'+loc+'","dateRange":""}';
   var requestData = {};
   requestData.queryId = QueryId;
   requestData.requestType = "widgetnumbers";
   requestData.filter = filter;
   requestData.location = loc;
   requestData.dateRange = "";
  
    $.ajax({  
        type: "POST",  
        cache:false,
        //data:arguments,
        data:JSON.stringify(requestData),
        async:true,
      //  url: "DetailsController",  
         url: "DetailsController/WidgetDataTable.action",
        dataType: "json",
        contentType: 'application/json',
        success:function(res) { handleTableData(filter, 'ntable', dialogId, res); }
    });
}
    
function handleTableData(filter, tablename, dialogId, res) {
    if(res.errorMessage){
        
        alert(res.errorMessage);
        return;
    }
    var tabledata = res.dataTable;
    var tablehtml = "";
    var hdritems = tabledata[0];
    var row = "<tr><th style='text-align: left'>"+ hdritems[1] + "</th>";
    for (var x=2;x<hdritems.length;x++) {
        row = row + "<th>" + hdritems[x] + "</th>";
    }
    row = row + "</tr>";

    tablehtml += row;
    
    for(var i = 1; i<tabledata.length;i++){
        var rowitems = tabledata[i];
        //row = "<tr class='clickableRow' href=\""+rowitems[0]+"\"><td class='firstTd' >" + rowitems[1] + "</td>";
        row = "<tr><td class='firstTd' >" + rowitems[1] + "</td>";
        for (var x=2;x<hdritems.length;x++) {
            row = row + "<td>" + rowitems[x] + "</td>";
        }
        row = row + "</tr>";
        tablehtml += row;        
    }
    //Set table data
    $('#'+tablename+dialogId).html(tablehtml);
    
    //Click anywhere on the row to switch to images view
    /*jQuery(document).ready(function($) {
      $(".clickableRow").click(function() {
          //alert( $(this).attr('href')  +' selected row' );
          getWidgetPhotos($(this).attr('href'),QueryId,dialogId);
            $('#table'+dialogId).removeClass('active');
            $('#images'+dialogId).addClass('active');
            $('#table_li'+dialogId).removeClass('active');
            $('#images_li'+dialogId).addClass('active');
      });
    }); */
}

/* Funciton Used to set the window dynamic content for multiple windows  
* through requests and response data contains common data related to three tabs i.e Numbers, Charts, Photos */

function getWidgetPhotos(filter,QueryId,dialogId){
    //var argument = encodeURIComponent('{"QueryId":"'+QueryId+'","requestType":"widgetphotos","filter":"'+filter+'","location":"","dateRange":"","startIndex":"0"}');
   // var argument = encodeURIComponent('{"queryId":"'+QueryId+'","requestType":"widgetphotos","filter":"'+filter+'","location":"","dateRange":"","startIndex":"0"}');
    var requestData = {};
   requestData.queryId = QueryId;
   requestData.requestType = "widgetphotos";
   requestData.filter = filter;
   requestData.location = "";
   requestData.dateRange = "";
   requestData.startIndex = "0";
    //$("#content"+dialogId).html('<div style="text-align: center; font-weight: bold; margin: 180px auto 0px;" ><span style="top:100px;">Loading...</span></div>');
    $.ajax({  
        type: "POST",
        cache:false,
        async:true,
        data:JSON.stringify(requestData),
        //url: "DetailsController",  
        url: "DetailsController/WidgetPhotos.action",  
        dataType: "json",
        contentType: 'application/json',
        success:function(res){ handlePhotos(QueryId,dialogId,res); }
    });
}

function handlePhotos(QueryId,dialogId,res) {
        
    if(images.length == 0) {
        showLargeImg(dialogId,"noimage.jpg");
        return;
    }
    if(res.errorMessage){
        
        alert(res.errorMessage);
        return;
    }
    
    var photos = res.photos;
    images =  photos[0].images.split(', ');
    
    var imghtml="";
    
    for(var i=0;i<images.length;i++) {            
        imghtml += '<li><img onclick="showLargeImg('+dialogId+',this.src)" src="'+ ImageFolder+'photos/'+images[i]+'" alt="Image" class="img-responsive"></li> ';        
    }
    //Set images
    $('#thumb'+dialogId).html(imghtml);
}

function showLargeImg(dialogId,img) {
    g_thumbHtml[dialogId] = $('#images'+dialogId).html();
    
    var largeImgHtml = '<img onclick="showThumbs('+dialogId+')" src="'+img+'" alt="Image" class="img-responsive">';
    $('#images'+dialogId).html(largeImgHtml);
}

function showThumbs(dialogId) {
    $('#images'+dialogId).html(g_thumbHtml[dialogId]);
}

function getWidgetChart(QueryId,dialogId){
    var loc = $('#place').val();
    var requestData = {};
   requestData.queryId = QueryId;
   requestData.requestType = "widget";
   requestData.filter = "";
   requestData.location = loc;
   requestData.dateRange = "";
  
    $.ajax({  
        type: "POST",  
        cache:false,
        async:true,
       // data:'detailsRequest={"QueryId":"'+QueryId+'","requestType":"widget","filter":"","location":"'+loc+'","dateRange":""}',
        data:JSON.stringify(requestData),
      //  url: "DetailsController",  
        url: "DetailsController/WidgetChart.action",
        dataType: "json",
        contentType: 'application/json',
        success: function(res) { handleChartData(QueryId,dialogId,res); }
    });    
}

function handleChartData(QueryId,dialogId,res) {
    if(res.errorMessage){
        
        alert(res.errorMessage);
        return;
    }
    if(res.length == 1){  //Checking if data is NULL
        //$('.Detail'+dialogId+' #chart'+dialogId).html('<div style="text-align: center; font-weight: bold; margin: 180px auto 0px;" ><span style="top:100px;">NO DATA</span></div>');
    }else{
        //Remove the Please wait loading... sign
        $('#loading'+dialogId).removeClass('active');
        $('#piechart'+dialogId).addClass('active');
        $('#piechart_li'+dialogId).addClass('active');
        
        //Set chart title to reflect location
        var req_loc = $('#place').val();
        var act_loc = res.chartVo.location; 
        if(req_loc!=act_loc) {
            set_toptext(LocError,1);
        } else {
            set_toptext(ReportDesc,0);
        }
        if(act_loc == "") act_loc = "All Locations";
        
        $('.WidgetTitle'+dialogId).text(SavedQueries[dialogId-1]+" - "+act_loc);
           
        //Set description in Short Notes
        $('#viewinCont'+dialogId).text(res.chartVo.desc);
        
        //Create chart
       // var transposed = res.charts;
        var transposed = res.chartVo.dataTable;
        var cdata = google.visualization.arrayToDataTable(transposed);
        
        
        if(res.chart_type=='bar') {
            var options = {   /*Chart Options to render the chart */
                sort:'enable', 
                legend : 'bottom',
                pieSliceText: 'percentage',
                titlePosition: 'out'
            };
            var chart = new google.visualization.BarChart(document.getElementById('chartarea'+dialogId));
            chart.draw(cdata, options);
        } else {         
            var options = {   /*Chart Options to render the chart */
                sort:'enable', 
                legend : 'right',
                pieSliceText: 'percentage',
                titlePosition: 'out'
            };   
            var chart = new google.visualization.PieChart(document.getElementById('chartarea'+dialogId));
            chart.draw(cdata, options);
        }
        
        //var table = new google.visualization.Table(document.getElementById('table_div_bar'+dialogId));
        //table.draw(cdata, {showRowNumber: true, style: 'font-style:bold; font-size:22px;'});
        // The select handler. Call the chart's getSelection() method
        /*
        function selectHandler() {
          var selectedItem = chart.getSelection()[0];
          if (selectedItem) {
            var filter = cdata.getValue(selectedItem.row, 0);
            
            //Fetch table data for the selection made
            getWidgetTable(filter, QueryId, dialogId);
            
            //Switch to table view
            $('#piechart'+dialogId).removeClass('active');
            $('#table'+dialogId).addClass('active');
            $('#piechart_li'+dialogId).removeClass('active');
            $('#table_li'+dialogId).addClass('active');
          }
        }
  
        // Listen for the 'select' event, and call my function selectHandler() when
        // the user selects something on the chart.
        google.visualization.events.addListener(chart, 'select', selectHandler);
        */
    }   
}


function getAreasList(filter, QueryId, dialogId){
    var loc = $('#place').val();
   // var arguments = 'detailsRequest={"QueryId":"'+QueryId+'","requestType":"widgetnumbers","filter":"'+filter+'","location":"'+loc+'","dateRange":""}';
   var requestData = {};
   requestData.queryId = QueryId;
   requestData.requestType = "widgetnumbers";
   requestData.filter = filter;
   requestData.location = loc;
   requestData.dateRange = "";
    $.ajax({  
        type: "POST",  
        cache:false,
        data:JSON.stringify(requestData),
        async:true,
       //  url: "DetailsController",  
         url: "DetailsController/WidgetDataTable.action",
        dataType: "json",
        contentType: 'application/json',
        success:function(res) { handleAreasList(filter, QueryId, dialogId, res); }
    });
}
    
function handleAreasList(filter, QueryId, dialogId, res) {
    
    if(res.errorMessage){
        
        alert(res.errorMessage);
        return;
    }
    var tableData = res.dataTable;
    var tablehtml = "";
    var row = "";
    
    for(var i = 0; i<tabledata.length;i++){
        if(i+2 < tabledata.length ) {
            row = '<tr><td onclick="sel(\''+tabledata[i] +'\')">' + tabledata[i] + '</td><td onclick="sel(\''+tabledata[i+1] +'\')">'+ tabledata[i+1] + '</td><td onclick="sel(\''+tabledata[i+2] +'\')">'+ tabledata[i+2] + "</td></tr>" ;
            i+=2;
        } else if(i+1 < tabledata.length ) {
            row = '<tr><td onclick="sel(\''+tabledata[i] +'\')">' + tabledata[i] + '</td><td onclick="sel(\''+tabledata[i+1] +'\')">'+ tabledata[i+1] + '</td></tr>' ;
            i+=1;
        } else {
            row = '<tr><td onclick="sel(\''+tabledata[i] +'\')">' + tabledata[i] + '</td></tr>' ;
        }
      
        tablehtml += row;        
    }
    //Set table data
    $('#areas').html(tablehtml);
}

function sel(text) {
    var loc = $('#place').val();
    $('#place').val(text+","+loc);    
    $( "#dialog" ).dialog( "close" );
}
//Create a pop-up search box
function LocationSearch() {
    var loc = $('#place').val();
    if(loc!="") {
        var ep = loc.indexOf(",");
        if(ep!=-1) {
            loc = loc.split(",")[1];            
            $('#place').val(loc);
        }    
        
        getAreasList("", "areas", "areas");
        $( "#dialog" ).dialog({
            width:710,
            height:600});
    }
}

function submitNote(note,id) {
    var queryId = SavedQueryIds[id-1];
    var loc = $('#place').val();
    note = encodeURIComponent(note);
    //var arguments = '{"QueryId":"'+queryId+'","requestType":"submitnotes","note":"'+note+'","location":"'+loc+'","dateRange":""}';
   var requestData = {};
   requestData.queryId = queryId;
   requestData.requestType = "submitnotes";
   requestData.location = loc;
   requestData.dateRange = "";
   requestData.note = note;
    $.ajax({  
        type: "POST",  
        cache:false,
        async: true,
        data:JSON.stringify(requestData),
        url: "DetailsController/NotesData.action",
        dataType: "json",
        contentType: 'application/json',
        success:function(res) { handleNotes('notestable', id, res); }
    });    
}

function handleNotes(tablename, dialogId, res) {
     if(res.errorMessage){
        
        alert(res.errorMessage);
        return;
    }
    var tabledata = res.dataTable;
    //var tablehtml = $('#'+tablename+dialogId).html();    
    var tablehtml = "";
    var hdritems = tabledata[0];
    
    for(var i = 1; i<tabledata.length;i++){
        var rowitems = tabledata[i];
        var row="";
        if(rowitems[0].length !=0) {
            row=rowitems[0]+": ";
        }
        //row = "<tr class='clickableRow' href=\""+rowitems[0]+"\"><td class='firstTd' >" + rowitems[1] + "</td>";
        //row = "<tr><td class='firstTd' >" + rowitems[1] + "</td>";
        for (var x=1;x<hdritems.length;x++) {
            row += rowitems[x];
            if(hdritems.length>(x+1)) row +=", ";
        }
        row = row + "<br>";
        tablehtml = row + tablehtml;        
    }
    //Set table data
    $('#'+tablename+dialogId).html(tablehtml);    
}

///$("#content a[href='http://']").attr("target","_blank");