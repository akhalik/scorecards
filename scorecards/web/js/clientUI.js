var favlocationsValues = null,favlocationsOptions = null;
var SavedQueryIds=null,SavedQueries=null;
var totalImageCount=new Array();
var click_count=new Array();
var startIndex=new Array();
var images=0;
var aboutPhoto=0;
var descriptions=0;
var ImageFolder=0;

function getClientUIData() 
{
    var configData= null;
    $.ajax({  
        type: "POST",  
        cache:false,
        async:false,
        data:'detailsRequest',
        url: "ClientController",  
        dataType: "json",
        success: function(){
        }
    }).done(function(res) {
        configData = res.configData;
    });
    
    SavedQueryIds = configData[0].QueryIds.split(",");
    SavedQueries = configData[0].Queries.split(",");
    
    for(var i=0;i<SavedQueryIds.length;i++){  //Ist of featured reports
        $('#list_div').find('.queries').append($("<option  value='"+SavedQueryIds[i]+"'>" + SavedQueries[i] + "</option>"));
    }
    
    $('#list_div').find('.queries').unbind('change').change(function(){
        var rvalue = $(this).children(":selected").attr("value");
        //PivotWindow(rvalue);
        StoreDirectory(rvalue);
    });
    
    ImageFolder = configData[0].ImageFolder;
    
    $('.brnd_nam').text(configData[0].title);
    $('#logo').attr('src',configData[0].logo);
    $('.header1').css('background-color',configData[0].color0);
    $('.header1_middle').css('background-color',configData[0].color1);  
    $('.brnd_nam').css('color',configData[0].fontcolor);     
    $('.header2_text').css('color',configData[0].fontcolor);   
    $('.wcm_lo ul li a').css('color',configData[0].fontcolor);  
    $('.list_div').css('background-color',configData[0].color1);
        
    favlocationsValues = configData[0].favlocationIds;
    favlocationsOptions = configData[0].favlocations;

}

/* Funciton Used to set the window dynamic html for multiple windows  */
function windowContent(WindowType,divID){
    var windowContent = null;

    if(WindowType == 'PivotWindow'){
        windowContent = 
        '<div class="Detail'+divID+'" style="background-color: white;"> '+ '<div class="Detail_tabs btabs" style=" "> '+
        '<ul style="margin-left:-16px"> '+
        '<li style="outline:none"><a  id="numbers'+divID+'" href="#numbers_div'+divID+'" class="numbers_link">Numbers</a></li>'+
        '<li style="outline:none"><a id="charts'+divID+'" class="charts_link" href="#charts_div'+divID+'">Charts</a></li>'+
        '<li style="outline:none"><a id="photos'+divID+'" class="photos_link" href="#photos_div'+divID+'">Photos</a></li> </ul>'+
        '<div id="numbers_div'+divID+'" class="bdivs">'+'<p id="tabletitle'+divID+'" style="background: #aaaaaa; font-weight: bold; text-align: left; color: black; padding-bottom: 0px;">Table Title</p>'+ 
        '<div style="text-align: right; width: 100%; margin-top: 10px" >'+
        '<span style="float: left;" >'+
        '<select id="brands'+divID+'" name="brands" class="rowselect'+divID+'" > </select> '+
        '</span> </div>'+
        '<div class="numbersTable" style="overflow: auto; float: left; width: 100%; margin-top: 5px"><table id="ntable'+divID+'" style="float:left;width:100%" ><tbody></tbody></table></div>'+'</div>'+
        '<div id="charts_div'+divID+'" class="bdivs">'+
        '<div style="background: #aaaaaa"> <p id="charttitle'+divID+'" style="font-weight: bold;"> Chart Title </p></div>'+ 
        '<div style="margin-top:10px"> <select class="rowselect'+divID+'"></select> <select  class="charttype'+divID+'"></select> '+
        '<span style="float: right;" ><button style="margin-left: 10px;float:right;" id="Transpose'+divID+'" class="ui-button ui-widget ui-state-default ui-button-text-only">Transpose</button></span>'+ 
        '</div>' +
        '<div id="chart'+divID+'" style="margin-top: 20px;" ></div>'+
        '<div  id="table_div_bar"  name="table_div_bar" style="margin-left:0px;width:550px;margin-top:0% " ></div>'+
        '</div>'+
        '<div id="photos_div'+divID+'" class="bdivs">'+ '<input type="text" size="20" id="SearchBox'+divID+'">'+
        '<div class="pagenation">'+ '<a  id="prev_page'+divID+'" class="navkeyPrev" disabled="disabled" style="color:#c2c2c2 !important" href="javascript:void(0)" >Prev</a> <span> <span id="first_image_num'+divID+'">1</span> - <span id="last_image_num'+divID+'" >12</span> of <span class="totalCount"></span> Photos</span><a class="navkeyNext" href="javascript:void(0)" id="next_page'+divID+'" style="color: #2383d4 !important;" >Next</a> '+
        '</div>'+'</div>'+
        '</div>'+'</div>';
    } else if(WindowType == 'Directory'){
        windowContent = 
        '<div class="Detail'+divID+'" style="background-color: white;"> '+ '<div class="Detail_tabs btabs" style=" "> '+
        '<div id="numbers_div'+divID+'" class="bdivs" style="width: 30%">'+ 
        '<div style="text-align: right; width: 100%; margin-top: 10px" >'+
        '<span style="float: left;" >'+
        '<select id="brands'+divID+'" name="brands" class="rowselect'+divID+'" > </select> '+
        '</span> </div>'+
        '<div class="numbersTable" style="overflow: auto; float: left; width: 100%; height: 470px; margin-top: 5px"><table id="ntable'+divID+'" style="float:left;width:100%" ><tbody></tbody></table></div>'+
        '</div>'+
        '<div id="photos_div'+divID+'" class="bdivs" style="width: 65%; float: left; margin-left: 1%">'+ '<input type="text" size="20" id="SearchBox'+divID+'">'+
        '<div class="pagenation">'+ '<a  id="prev_page'+divID+'" class="navkeyPrev" disabled="disabled" style="color:#c2c2c2 !important" href="javascript:void(0)" >Prev</a> <span> <span id="first_image_num'+divID+'">1</span> - <span id="last_image_num'+divID+'" >12</span> of <span class="totalCount"></span> Photos</span><a class="navkeyNext" href="javascript:void(0)" id="next_page'+divID+'" style="color: #2383d4 !important;" >Next</a> '+
        '</div>'+'</div>'+
        '</div>'+'</div>';
    } else if (WindowType == 'Widget'){
        windowContent = 
'                <!--block1-->'+
'                <div class="col-md-6 col-lg-6 col-sm-12 col-xs-12 top5">'+
'                <!-- Block-->'+
'                  <div class="blockArea">'+
'                       <div class="blockHeader">     '+
'                            <div class="fl">'+
'                                <h3>Catchment Area</h3>'+
'                             </div>'+
'                            '+
'                            <div class="fr">'+
'                            <ul class="nav nav-tabs">'+
'                                <li class="active"><a href="#piechart'+divID+'" data-toggle="tab" class="piechart"></a></li>'+
'                                <li><a href="#listchart'+divID+'" data-toggle="tab" class="listchart"></a></li>'+
'                                <li><a href="#images'+divID+'" data-toggle="tab" class="images"></a></li>'+
'                                <li><a href="#mapchart'+divID+'" data-toggle="tab" class="mapchart last"></a></li>'+
'                            </ul>'+
'                            '+
'                            </div>'+
'                         <div class="clearfix"></div>'+
'                       </div>'+
'                   '+
'                    <div class="tab-content">'+
'                      <div class="tab-pane active" id="piechart'+divID+'">'+
'                      	'+
'                       	 <div id="piechart" style="width: 500px; height: 300px; margin-left:0px; padding-left:0px; float:left;"></div>'+
'                        '+
'                      </div>'+
'                      <div class="tab-pane" id="table'+divID+'">'+
'                      <table id="ntable'+divID+'" style="float:left;width:100%" ><tbody></tbody></table>'+
'                      </div>'+
'                       <div class="tab-pane" id="images'+divID+'">'+
'                      	'+
'                         <ul class="gallery" >'+
'			     <li><a href="images/photogallery/img-1.jpg"><img src="images/photogallery/thumb_img-1.jpg" alt="Image" class="img-responsive"></a></li>'+
'                            <li><a href="images/photogallery/img-1.jpg"><img src="images/photogallery/thumb_img-1.jpg" alt="Image" class="img-responsive"></a></li>'+
'                            <li><a href="images/photogallery/img-1.jpg"><img src="images/photogallery/thumb_img-1.jpg" alt="Image" class="img-responsive"></a></li>'+
'                            <li><a href="images/photogallery/img-1.jpg"><img src="images/photogallery/thumb_img-1.jpg" alt="Image" class="img-responsive"></a></li>'+
'                            <li><a href="images/photogallery/img-1.jpg"><img src="images/photogallery/thumb_img-1.jpg" alt="Image" class="img-responsive"></a></li>'+
'                            <li><a href="images/photogallery/img-1.jpg"><img src="images/photogallery/thumb_img-1.jpg" alt="Image" class="img-responsive"></a></li>'+
'                            <li><a href="images/photogallery/img-1.jpg"><img src="images/photogallery/thumb_img-1.jpg" alt="Image" class="img-responsive"></a></li>'+
'                            <li><a href="images/photogallery/img-1.jpg"><img src="images/photogallery/thumb_img-1.jpg" alt="Image" class="img-responsive"></a></li>'+
'			  </ul>'+
'                        '+
'                      </div>'+
'                       <div class="tab-pane" id="4">'+
'                      	<p>'+
'                       	  <img src="images/map.jpg" class="img-responsive"/>'+
'                        </p>'+
'                      </div>'+
'                      '+
'                  </div>'+
'                   '+
'                   <div class="contFooter">'+
'                      <p id="notes'+divID+'" class="viewinCont">'+
'                         Lorem ipsum dolor sit amet, consectetur adipisicing elit..'+
'                      </p>'+
'                      <div class="viewinsights"><a href="javascript:void(0)" id="notes'+divID+'">Show More</a></div>'+
'                      <div class="clearfix"></div>'+
'                   </div>'+
'                   <div class="viewInsights" id="notes'+divID+'">'+
'                       <div class="inner">'+
'                       <div class="cross"><a href="javascript:void(0)" id="1">Show Less</a></div>'+
'                      	<h4><strong>Insights-1</strong></h4>'+
'                       <p>Lorem Ipsum is simply dummy text of the printing and typesetting Many desktop publishing packages and web Uncover many web sites still in their infancy uncover many web sites still in their infancy  there are many variations'+
'                       </p>'+
'                       <div class="addin"><a href="javascript:void(0)" id="1">+ Add</a></div>'+
'                       <div id="addin-1" class="addinputbox"><form><input type="text" class="inputadd"><button class="custombtn btn-warning-custom" type="button">Add</button></form></div>'+
'                       '+
'                   </div>'+
'                   </div>'+
'                  </div>'+
'                <!-- Block-->'+
'            </div>'+
'                      <!--block1-->'
    } else { //blank window
        windowContent = 
        '<div class="Detail'+divID+'" style="background-color: white;"> '+ '<div class="Detail_tabs btabs" style=" "> '+
        '<ul style="margin-left:-16px"> '+
        '<li style="outline:none"><a  id="numbers'+divID+'" href="#numbers_div'+divID+'" class="numbers_link">Numbers</a></li>'+
        '<li style="outline:none"><a id="charts'+divID+'" class="charts_link" href="#charts_div'+divID+'">Charts</a></li>'+
        '<li style="outline:none"><a id="photos'+divID+'" class="photos_link" href="#photos_div'+divID+'">Photos</a></li> </ul>'+
        '<div id="numbers_div'+divID+'" class="bdivs">'+
        
        '<div class="numbersTable"><table id="ntable'+divID+'" style="float:left" ><tbody></tbody></table></div>'+'</div>'+
        '<div id="charts_div'+divID+'" class="bdivs">'+
        '</div>' +
        '<div id="chart'+divID+'" style="margin-top: 20px;" ></div>'+
        '</div>'+'</div>';
    }
    return windowContent;
}

var dialogId = 0;
function newDBWidget()
{
    dialogId++;
    
    var htmlcontent = windowContent("Widget",dialogId);
    //var htmlcontent = windowContent("BlankWindow",dialogId);
     
}
/* Funciton Used to intialize the window into Html DOM and contents related to the Window
 * And function calls based on request
 * */

function PivotWindow(QueryId){  //detailsWindow  
    dialogId++;
    
    var htmlcontent = windowContent("PivotWindow",dialogId);
    //var htmlcontent = windowContent("BlankWindow",dialogId);
    
    $('.content_div').html(htmlcontent);
    var locationDropDown ='<form  id="locationform'+dialogId+'" class="locationform" style="margin:0px;width:185px">'+ '<select id="locationSelect'+dialogId+'" class="locationSelect" multiple="multiple" style="width:50px">'+  '<option value="India" selected>All Locations</option>'+ '</select></form>'
    var title_content = "";
    var pos = "";
    
    for(var i=0; i<SavedQueryIds.length; i++) {
        if(QueryId==SavedQueryIds[i])
            windowTitle = SavedQueries[i];
    }
    
    title_content  = '<table class="titlebar_cnt"><tr><td style="padding-left:4px">'+windowTitle+'</td> <td style="padding-left: 9px;" >'+locationDropDown+'</td><td ><input type="text" id="dateRangePick'+dialogId+'" class="dateRangePick" /></td></tr> </table>'
    pos = {
        my: "center+(40)% top-(40)%", 
        at: "center top",
        of: ".content_div"
    }; 
   
    $('.Detail'+dialogId).dialog({
        width:710,
        height:600,
        closeOnEscape: false,
        position: ['middle',0] , // 'left+230 top+7%',
        resizable: true,        
        draggable:true,
        title:title_content,
        close:function(){
            $(this).dialog("destroy");
        },
        open:function(){},
        titleButtons : [ {
            icon : "newwin",
            text : "Pin/Unpin",
            callBack : function(element) {
                popUp(0,"html,body");
                PivotWindow(QueryId)
                popUp(1,"html,body");
            }
        } ]
    }) 
    
    $('.Detail'+dialogId).removeClass('ui-corner-all');
    $('.Detail'+dialogId).parent().removeClass('ui-corner-all').css("top","100px");
    $('.Detail'+dialogId).prev().removeClass('ui-corner-all');
    $('.Detail'+dialogId).removeClass('ui-corner-all');
    $('.Detail'+dialogId).find('.Detail_tabs ul').removeClass('ui-widget-header ui-corner-all');
    $('.Detail'+dialogId).find('.Detail_tabs ul li').removeClass('ui-widget-header ui-corner-all');   
    $('.Detail'+dialogId).find('.Detail_tabs').tabs({
        active:0
    })  
    //setup location dropdown functionality
    loadLocationDropDown(QueryId,dialogId);    // Loading location dropdown

    //Set default date range
    //SetDateRangeDefaultValue();    
    $('.Detail'+dialogId+' #Transpose'+dialogId).button({
        icons: {
            primary: "ui-icon-shuffle"
        }
    })      
    
    getFavlocations(dialogId);
    getWindowData(QueryId,dialogId);
    intializeDatepicker(QueryId,dialogId);
}

/* Funciton Used to set the window dynamic content for multiple windows  
* through requests and response data contains common data related to three tabs i.e Numbers, Charts, Photos */



function getWindowData(QueryId,dialogId){
    popUp(0,"html,body");

    $('.Detail'+dialogId+'.storeAuditedMsg').html('');
    var dateString = $('#dateRangePick'+dialogId).val();
    var selectedLocation = $('#locationSelect'+dialogId).multiselect("getChecked").val();
    
    $.ajax({  
        type: "POST",  
        cache:false,
        async:false,
        data:'detailsRequest={"QueryId":"'+QueryId+'","requestType":"window","location":"'+selectedLocation+'","dateRange":"'+dateString+'"}',
        url: "DetailsController",  
        dataType: "json"
    }).done(function(res) {
        details = res.details;
    });
    
    //Window query returns values for the local drop downs

    if(details.length != 0){
        //Populate the drop down lists
        var selectOptions= details[0].filterOptions;
        var selectValues = details[0].filterValues; 
        var title = details[0].title;
              
        $('#tabletitle'+dialogId).text(title);
        setNumbersSelection('#numbers_div','.rowselect',selectOptions, selectValues, selectValues[0],dialogId)

    }else{
        noData(dialogId);
    }
                  
    $('.Detail'+dialogId+' #SearchBox'+dialogId).unbind('keypress').keypress(function (e) {  // Function call if u search any filter in search box loacted in photos Tab
        if (e.which == 13) {
            click_count[dialogId] = 0;
            startIndex[dialogId] = 0;
            $('.Detail'+dialogId+' #prev_page'+dialogId).attr("disabled",true);    
            $('.Detail'+dialogId+' #prev_page'+dialogId).removeAttr('style');
            $('.Detail'+dialogId+' #prev_page'+dialogId).css("color","#c2c2c2 !important");
            photoGrid(0,QueryId,dialogId);
        }
    });
    
    $('.Detail'+dialogId+' #prev_page'+dialogId).unbind('click').click(function(){  
        prev(QueryId,dialogId);   // Function cal to load photos on prev link click
    });
    $('.Detail'+dialogId+' #next_page'+dialogId).unbind('click').click(function(){
        next(QueryId,dialogId);  // Function cal to load photos on next link click
    });
    
    /**************************************************************************************/
    
    $('.Detail'+dialogId+' #charts'+dialogId).unbind('click').click(function(){
        
        $('#charttitle'+dialogId).text(title);
        
        var rowSelect = $('#numbers_div'+dialogId).find('.rowselect'+dialogId).children(":selected").attr("value")
     
        setNumbersSelection('#charts_div','.rowselect',selectOptions, selectValues, rowSelect, dialogId);
                
        var chartOptions = ['Bar','Line'];
        setNumbersSelection('#charts_div','.charttype',chartOptions, chartOptions, 'Bar', dialogId);
        
        $('.Detail'+dialogId).find('.Detail_tabs').tabs("option","active",1);  //Funciton cal to get charts related response
        chartTab(QueryId,selectedLocation,dateString,dialogId); 
    });
       
    /**************************************************************************************/
    
    $('.Detail'+dialogId+' #photos'+dialogId).unbind('click').click(function(){
        var locationmultiselect =  $('#locationSelect'+dialogId);
        $('.Detail'+dialogId).find('.Detail_tabs').tabs("option","active",2);
        locationmultiselect.multiselect('refresh');
        if(details.length != 0){
            if(details[0].locationType != "store"){
                photoGrid(0,QueryId,dialogId);
                $('.Detail'+dialogId+' #SearchBox'+dialogId).val("");
            }else{
                if(details[0].isAudited == "1"){
                    storecodelist = selectedLocation;
                    photoGrid(0,QueryId,dialogId);
                }
                else{
                    noData(dialogId);
                }
            }
        }else{
            noData(dialogId);
        }
    });
    /**************************************************************************************/
 
    $('.Detail'+dialogId+' #numbers'+dialogId).unbind('click').click(function(){
        $('.Detail'+dialogId).find('.Detail_tabs').tabs("option","active",0);
        NumbersTab(QueryId,selectedLocation,dateString,dialogId);
    });

    /* Following code will check which tab is active and which function to cal  */
    var active =  $('.Detail'+dialogId).find('.Detail_tabs').tabs( "option", "active" );
    if(active == 0){
        NumbersTab(QueryId,selectedLocation,dateString,dialogId);
    }else if(active == 1){
  
        $('#charttitle'+dialogId).text(title);
        setNumbersSelection('#charts_div','.rowselect',selectOptions, selectValues, selectValues[0], dialogId);
        
        var chartOptions = ['Bar','Line'];
        setNumbersSelection('#charts_div','.charttype',chartOptions, chartOptions, 'Bar', dialogId);

        $('.Detail'+dialogId).find('.Detail_tabs').tabs("option","active",1);  //Funciton cal to get charts related response
        chartTab(QueryId,selectedLocation,dateString,dialogId);
    }else{
        var locationmultiselect =  $('#locationSelect'+dialogId);
        locationmultiselect.multiselect('refresh');
        if(details.length != 0){
            if(details[0].locationType != "store"){
                photoGrid(0,QueryId,dialogId);
                $('.Detail'+dialogId+' #SearchBox'+dialogId).val("");
            }else{
                if(details[0].isAudited == "1"){
                    storecodelist = selectedLocation;
                    photoGrid(0,QueryId,dialogId);
                }
                else{
                    noData(dialogId);
                }
            }
        }else{
            noData(dialogId);
        }
    }
    popUp(1,"html,body");
      
}

/* Funciton Used to intialize the window into Html DOM and contents related to the Window
 * And function calls based on request
 * */
var dialogId = 0;
function StoreDirectory(QueryId){  //detailsWindow  
    dialogId++;
    
    var htmlcontent = windowContent("Directory",dialogId);
    //var htmlcontent = windowContent("BlankWindow",dialogId);
    
    $('.content_div').html(htmlcontent);
    var locationDropDown ='<form  id="locationform'+dialogId+'" class="locationform" style="margin:0px;width:185px">'+ '<select id="locationSelect'+dialogId+'" class="locationSelect" multiple="multiple" style="width:50px">'+  '<option value="India" selected>All Locations</option>'+ '</select></form>'
    var title_content = "";
    var pos = "";
    
    windowTitle = "Store Directoy";
    
    title_content  = '<table class="titlebar_cnt"><tr><td style="padding-left:4px">'+windowTitle+'</td> <td style="padding-left: 9px;" >'+locationDropDown+'</td><td ><input type="text" id="dateRangePick'+dialogId+'" class="dateRangePick" /></td></tr> </table>'
    pos = {
        my: "center+(40)% top-(40)%", 
        at: "center top",
        of: ".content_div"
    }; 
   
    $('.Detail'+dialogId).dialog({
        width:1200,
        height:600,
        closeOnEscape: false,
        position: ['middle',0] , // 'left+230 top+7%',
        resizable: true,        
        draggable:true,
        title:title_content,
        close:function(){
            $(this).dialog("destroy");
        },
        open:function(){},
        titleButtons : [ {
            icon : "newwin",
            text : "Pin/Unpin",
            callBack : function(element) {
                popUp(0,"html,body");
                StoreDirectory(QueryId)
                popUp(1,"html,body");
            }
        } ]
    }) 
    
    $('.Detail'+dialogId).removeClass('ui-corner-all');
    $('.Detail'+dialogId).parent().removeClass('ui-corner-all').css("top","100px");
    $('.Detail'+dialogId).prev().removeClass('ui-corner-all');
    $('.Detail'+dialogId).removeClass('ui-corner-all');
    $('.Detail'+dialogId).find('.Detail_tabs ul').removeClass('ui-widget-header ui-corner-all');
    $('.Detail'+dialogId).find('.Detail_tabs ul li').removeClass('ui-widget-header ui-corner-all');   
    $('.Detail'+dialogId).find('.Detail_tabs').tabs({
        active:0
    })  
    //setup location dropdown functionality
    loadLocationDropDown(QueryId,dialogId);    // Loading location dropdown

    //Set default date range
    //SetDateRangeDefaultValue();    
    
    getFavlocations(dialogId);
    getStoreDirectory(QueryId,dialogId);
    intializeDatepicker(QueryId,dialogId);
}

/* Funciton Used to set the window dynamic content for multiple windows  
* through requests and response data contains common data related to three tabs i.e Numbers, Charts, Photos */



function getStoreDirectory(QueryId,dialogId){
    popUp(0,"html,body");

    $('.Detail'+dialogId+'.storeAuditedMsg').html('');
    var dateString = $('#dateRangePick'+dialogId).val();
    var selectedLocation = $('#locationSelect'+dialogId).multiselect("getChecked").val();
    
    $.ajax({  
        type: "POST",  
        cache:false,
        async:false,
        data:'detailsRequest={"QueryId":"'+QueryId+'","requestType":"window","location":"'+selectedLocation+'","dateRange":"'+dateString+'"}',
        url: "DetailsController",  
        dataType: "json"
    }).done(function(res) {
        details = res.details;
    });
    
    //Window query returns values for the local drop downs

    if(details.length != 0){
        //Populate the drop down lists
        var selectOptions= details[0].filterOptions;
        var selectValues = details[0].filterValues; 
        var title = details[0].title;
              
        $('#tabletitle'+dialogId).text(title);
        setNumbersSelection('#numbers_div','.rowselect',selectOptions, selectValues, selectValues[0],dialogId)

    }else{
        noData(dialogId);
    }
                  
    $('.Detail'+dialogId+' #SearchBox'+dialogId).unbind('keypress').keypress(function (e) {  // Function call if u search any filter in search box loacted in photos Tab
        if (e.which == 13) {
            click_count[dialogId] = 0;
            startIndex[dialogId] = 0;
            $('.Detail'+dialogId+' #prev_page'+dialogId).attr("disabled",true);    
            $('.Detail'+dialogId+' #prev_page'+dialogId).removeAttr('style');
            $('.Detail'+dialogId+' #prev_page'+dialogId).css("color","#c2c2c2 !important");
            photoGrid(0,QueryId,dialogId);
        }
    });
    
    $('.Detail'+dialogId+' #prev_page'+dialogId).unbind('click').click(function(){  
        prev(QueryId,dialogId);   // Function cal to load photos on prev link click
    });
    $('.Detail'+dialogId+' #next_page'+dialogId).unbind('click').click(function(){
        next(QueryId,dialogId);  // Function cal to load photos on next link click
    });
    
    /* First fetch the store directoy data  */
    NumbersTab(QueryId,selectedLocation,dateString,dialogId);
    
    popUp(1,"html,body");
      
}

function intializeDatepicker(QueryId,dialogId){  // DatePicker intialization
    $('#dateRangePick'+dialogId).daterangepicker({
        onClose:function(){
            setTimeout(function(){
                getWindowData(QueryId,dialogId)
            }, 1000);
        }
    });
}

function getFavlocations(dialogId){  // Parsing favourite locations in to location Dropdown
    var locations = favlocationsOptions.split(",");
    var locationsValues =favlocationsValues.split(",")
    for(var i= 0;i<locations.length;i++){
        $('#locationSelect'+dialogId).append("<option value="+locationsValues[i]+">"+locations[i]+"</option>")
    }
    $('#locationSelect'+dialogId).multiselect('refresh');
}

function noData(dialogId){   // Function used when null data as response
    $('.Detail'+dialogId+' .storeAuditedMsg').html("<b style='color:red'>NO DATA</b>")
    $('.Detail'+dialogId+' #content'+dialogId).remove();
    $('.Detail'+dialogId+' #first_image_num'+dialogId).text("0");
    $('.Detail'+dialogId+' #last_image_num'+dialogId).text("0");
    $('.Detail'+dialogId+' .totalCount').text("0");
    $('.Detail'+dialogId+' #SearchBox'+dialogId).val("");
    $('.Detail'+dialogId+' #next_page'+dialogId).attr("disabled",true);           
    $('.Detail'+dialogId+' #next_page'+dialogId).removeAttr('style');
    $('.Detail'+dialogId+' #next_page'+dialogId).css("color","#c2c2c2 !important");
    $('.Detail'+dialogId).find('.numbersTable table tbody').html('NO DATA').css("text-align","center");
}

function setNumbersSelection(divName, selectName, options,values,selected,dialogId){  // Setting values into multiselect1(Brands) in numbers tab
    $(divName+dialogId).find(selectName+dialogId).empty();  
    for(var i= 0;i<options.length;i++){
        if(values[i]==selected) {
            $(divName+dialogId).find(selectName+dialogId).append($("<option  value='"+values[i]+"' selected>" + options[i] + "</option>"));            
        } else {
            $(divName+dialogId).find(selectName+dialogId).append($("<option  value='"+values[i]+"'>" + options[i] + "</option>"));
        }
    }
    if(options.length==0) {
        $(divName+dialogId).find(selectName+dialogId).hide();
    } else {
        $(divName+dialogId).find(selectName+dialogId).show();
    }
}

function setNumbersMultiselect(options,values,multiSelectId, dialogId){  // Setting values into multiselect1(Brands) in numbers tab
    var selectoptions = options.split(",");
    var selectValues = values.split(",");
    
    $('.Detail'+dialogId).find(multiSelectId).empty();  
    for(var i= 0;i<selectoptions.length;i++){
        $('.Detail'+dialogId).find(multiSelectId).append("<option value="+selectValues[i]+">"+selectoptions[i]+"</option>")     
            if(i<10){
                $('.Detail'+dialogId).find(multiSelectId + "> [value='"+selectValues[i]+"']").attr("selected","true"); 
            } 
    }
    $('.Detail'+dialogId).find(multiSelectId).multiselect('refresh');
}

function NumbersTab(QueryId,selectedLocation,dateString,dialogId){
    getNumbersTable(QueryId,selectedLocation,dateString,dialogId) // Function cal having ajax request for tablular data
    
    $('#numbers_div'+dialogId).find('.rowselect'+dialogId).unbind('change').change(function(){
    //var rvalue = $(this).children(":selected").attr("value");
    getNumbersTable(QueryId,selectedLocation,dateString,dialogId)
    });
}

function getNumbersTable(QueryId,selectedLocation,dateString,dialogId){  // Get Numbers Tabular data based on request Parameter i.e flag
    var rowSelect = $('#numbers_div'+dialogId).find('.rowselect'+dialogId).children(":selected").attr("value");
    if(typeof rowSelect=='undefined') rowSelect='';
    var arguments = 'detailsRequest={"QueryId":"'+QueryId+'","requestType":"numbers","filter":"'+rowSelect+'","location":"'+selectedLocation+'","dateRange":"'+dateString+'"}';
    
    var tabledata = null;
    $('.Detail'+dialogId).find('.numbersTable table tbody').html('<div style="text-align: center; font-weight: bold; margin: 180px auto 0px;" ><span style="top:100px;">Loading...</span></div>'); 
 
    $.ajax({  
        type: "POST",  
        cache:false,
        data:arguments,
        async:false,
        url: "DetailsController",  
        dataType: "json"
    }).done(function(res) {
        tabledata = res.numbers;
    }); 
    
    $('.Detail'+dialogId).find('.numbersTable table tbody').html('');
     
    var hdritems = tabledata[0];
    var row = "<tr><th style='text-align: left'>"+ hdritems[0] + "</th>";
    for (var x=1;x<hdritems.length;x++) {
        row = row + "<th>" + hdritems[x] + "</th>";
    }
    row = row + "</tr>";

    $('.Detail'+dialogId).find(' .numbersTable table tbody').append(row);
    for(var i = 1; i<tabledata.length;i++){
        var rowitems = tabledata[i];
        row = "<tr><td class='firstTd' >" + rowitems[0] + "</td>";
        for (var x=1;x<hdritems.length;x++) {
            //row = row + "<td style='text-align: left'>" + rowitems[1] + "</a></td>";
            var anchorTagOpen = "<a href=\"javascript:showPhotos(" + dialogId + ", \'" +
                                QueryId + "\', \'" + rowitems[0] + "\',\'" + hdritems[x] + "\');\">";
            row = row + "<td>" + anchorTagOpen + rowitems[x] + "</a></td>";
        }
        row = row + "</tr>";
        $('.Detail'+dialogId).find(' .numbersTable table tbody').append(row);
    }
   
   /* var numCols = $('.Detail'+dialogId).find('.numbersTable table').find('tr')[0].cells.length;
    var addRow = "<tr><td  style='text-align: left;font-weight: bold' >Total</td>";
    for(var x=1; x<numCols ; x++){        
        addRow += "<td>0</td>";
    }
    $('.Detail'+dialogId).find('.numbersTable table tbody').append(addRow + "</tr>");
    var rows =  $('.Detail'+dialogId).find('.numbersTable table tbody tr');
    for(var j=1; j<numCols ; j++){   //Total row caliculation 
        var sum = 0;
           rows.each(function() {
            if($(this).index() < 2 )
                return;
                 sum += parseFloat($(this).children('td').eq(j).text());
           });
           $('.Detail'+dialogId).find('.numbersTable table tbody tr:last-child').children('td').eq(j).text(sum) ;
    }*/
    //$('.Detail'+dialogId).find('.numbersTable table tbody tr:last').after('<tr><td colspan='+tabledata[0].length+'></td></td></tr>')
}

function chartTab(QueryId,selectedLocation,dateString,dialogId){ /*Chart validations */
 
    getChartData(dialogId,QueryId,selectedLocation,dateString,true);
        
    $('#charts_div'+dialogId).find('.rowselect'+dialogId).unbind('change').change(function(){
        getChartData(dialogId,QueryId,selectedLocation,dateString,true);
    });
    $('#charts_div'+dialogId).find('.charttype'+dialogId).unbind('change').change(function(){
        getChartData(dialogId,QueryId,selectedLocation,dateString,true);
    });
      
    $('#Transpose'+dialogId).unbind('click').toggle(function(){ // Toggle function for tranpose button
        getChartData(dialogId,QueryId,selectedLocation,dateString,false);
    }, function(){
        getChartData(dialogId,QueryId,selectedLocation,dateString,true);
    });        
}


/*Function used to get the JSON ARRAY related chart*/
function getChartData(dialogId,QueryId,selectedLocation,dateString,doTranspose){
  
    $('.Detail'+dialogId+' #chart'+dialogId).html('<div style="text-align: center; font-weight: bold; margin: 180px auto 0px;" ><span style="top:100px;">Loading...</span></div>');
    //$('#charts_div'+dialogId).find('.rowselect'+dialogId).show();
    //$('#charts_div'+dialogId).find('.columnselect'+dialogId).hide();
 
    var rvalue = $('#charts_div'+dialogId).find('.rowselect'+dialogId).children(":selected").attr("value");
    if(typeof rvalue=='undefined') rvalue='';
    var charttype = $('#charts_div'+dialogId).find('.charttype'+dialogId).children(":selected").attr("value");
    var arguments = 'detailsRequest={"QueryId":"'+QueryId+'","requestType":"charts","filter":"'+rvalue+'","location":"'+selectedLocation+'","dateRange":"'+dateString+'"}';
    
    var chartArray= null;
    $.ajax({  
        type: "POST",
        cache:false,
        async:false,
        data:arguments,
        url: "DetailsController",  
        dataType: "json"
    }).done(function(res) {
        chartArray = res.charts;
    });    
    
    if(chartArray.length == 1){  //Checking if data is NULL
        $('.Detail'+dialogId+' #chart'+dialogId).html('<div style="text-align: center; font-weight: bold; margin: 180px auto 0px;" ><span style="top:100px;">NO DATA</span></div>');
    }else{
        var transposed = (doTranspose==true)?chartArray.transpose():chartArray;
        var cdata = google.visualization.arrayToDataTable(transposed);
        var options = {   /*Chart Options to render the chart */
            width: 550,
            height: 370,
            sort:'enable', 
            hAxis:{
                title:""
            },
            vAxis:{
                title:"",
                gridlines:{
                    color: 'white'
                }
            },
            legend : {
                position: 'bottom',
                alignment: 'center',
                textStyle: {
                    fontSize: 14
                }
            },
            titlePosition: 'out',
            chartArea:{
                left:50,
                width:"85%",
                height:"70%"
            },
            backgroundColor: {
                stroke: 'black',
                strokeWidth: 2
            }
        };
        
        if(charttype=='Bar') {
            var chart = new google.visualization.ColumnChart(document.getElementById('chart'+dialogId));
        } else {
            var chart = new google.visualization.LineChart(document.getElementById('chart'+dialogId));
        }
        var table = new google.visualization.Table(document.getElementById('table_div_bar'));
        table.draw(cdata, {showRowNumber: true, height :150, style: 'font-style:bold; font-size:22px;'});
        chart.draw(cdata, options);
    }
}

function SetDateRangeDefaultValue(){   // Function used to set default date range value in Datapicker depending on current quarter
    var cdate= new Date();
    var cmonth= cdate.getMonth();
    var x,ch;
    if(cmonth >= 0 && cmonth <= 2){
        ch= 3;
    }
    else if(cmonth >= 3 && cmonth <= 5){
        ch = 0;
    }
    else if(cmonth >= 6 && cmonth <= 8){
        ch = 1;
    }
    else if(cmonth >= 9 && cmonth <= 11){
        ch = 1;
    }
    switch (ch) 
    {
        case 0:
            x=getFirstRoundStartDate('D')+" - "+getFirstRoundEndDate('D');  //0-2 
            break;
        case 1:
            x=getSecondRoundStartDate('D')+" - "+getSecondRoundEndDate('D'); //3-5
            break;
        case 2:
            x=getThirdRoundStartDate('D')+" - "+getThirdRoundEndDate('D'); //6-8
            break;
        //case 3:
        //    x=getFourthQuarterStartDate('D')+" - "+getFourthQuarterEndDate('D');//9-11
        //    break;
    } 
    $('.dateRangePick').val(x);
}

//Location multi-select functionality here.  No reference to client specific data
function loadLocationDropDown(QueryId,dialogId){  // Intializing Location dropdown
    var locationmultiselect = $('#locationSelect'+dialogId)
    locationmultiselect.multiselect({
        multiple:false,
        noneSelectedText:"",
        selectedList: 1,
        close:function(){
            getWindowData(QueryId,dialogId);
        }
    }).multiselectfilter({
        filter: function(event, matches){
            if(event.which==13 || event.keyCode == 13){
                var newOption = $(this).multiselect("widget").find(".ui-multiselect-filter [type=search]").val();
                if(locationmultiselect.find('option[value='+newOption+']').text() == ""){
                    locationmultiselect.append("<option value="+newOption+">"+newOption+"</option>");
                    locationmultiselect.find('option').each(function(){
                        $(this).attr('selected',false);
                    });
                    locationmultiselect.find('option:last-child').attr('selected',true);
                    locationmultiselect.multiselect('refresh');
                    locationmultiselect.multiselect("close");
                }else{
                    locationmultiselect.find('option').each(function(){
                        $(this).attr('selected',false);
                    });
                    locationmultiselect.find('option[value='+newOption+']').attr('selected',true);
                    locationmultiselect.multiselect('close');
                    locationmultiselect.multiselect('refresh');
                }
            }
        }
    });
    
    $('#locationform'+dialogId).find('button').removeClass('ui-corner-all');
}

function popUp(val,id){  // Function used to get the loading image while ajax request for window data
    var popup="";
    $(".popup_main").remove();
    popup+='<div class="popup_main">'+
    '<div class="popup_inner"></div>'+
    '</div>';

    $(id).prepend(popup);
    var page_height=0;
    var pop_up_height=0;
    var pop_up_padding=0;                                                               
    page_height=$(id).height();                         
    pop_up_height=300;
    pop_up_padding=((page_height-pop_up_height)/2);                      
    $(".popup_inner").css("top",pop_up_padding);      
    $(".popup_main").css("height",page_height);     
    if(val==1)
        $(".popup_main").remove();
}

function LaunchQuery() {
    var rvalue = $('#list_div').find('.queries').children(":selected").attr("value");
    StoreDirectory(rvalue);
}
function QueryBuilder() {
    var divID = dialogId++;
    
    //alert("Query Builder");
    var htmlcontent = 
        '<div class="Detail'+divID+'" style="background-color: white;">'+
        '<div style="width: 100%; margin-top: 10px"> <p style="font-weight: bold; text-align: left; color: black; float: left;"> Give Your Query A Name </p>'+ 
        '<input type="text" name="query_name" style="float: right; margin-left: 5%; width: 60%; padding-left: 2px;"/></div>'+
        '<div style="padding-top: 30px"> <p style="background: #eeeeee; font-weight: bold; text-align: left; color: black;">Choose fields to add to report</p></div>'+ 
        '<div id="container'+divID+'" style="padding-top: 5px; height: 45px">'+
        '<div id="tables'+divID+'" class="qb_parts">'+
        '<p> Select Table </p>'+
        '<select id="table" name="table_select" class="rowselect" style="width: 100%">'+
            '<option value="pri">Primary Sales</option>'+
            '<option value="sec">Secondary Sales</option>'+
            '<option value="stores">Store Details</option>'+
            '<option value="audit">Audit Details</option>'+
        '</select> </div>'+
        '<div id="fields'+divID+'" class="qb_parts" style="margin-left: 3%">'+     
        '<p> Select Field </p>'+   
        '<select id="field" name="field_select" class="rowselect" style="width: 100%">'+
            '<option value="olcode">Outlet Code</option>'+
            '<option value="brand">Brand</option>'+
            '<option value="sku">SKU</option>'+
            '<option value="period">Period</option>'+
            '<option value="cases">Cases</option>'+
        '</select> </div>' +
        '<div id="logic'+divID+'" class="qb_parts" style="margin-left: 3%">'+
        '<p> Select Function </p>'+
        '<select id="logic" name="logic_select" class="rowselect" style="width: 100%">'+
            '<option value="none">None</option>'+
            '<option value="count">Count</option>'+
            '<option value="sum">Sum</option>'+
            '<option value="avg">Average</option>'+
            '<option value="max">Max</option>'+
            '<option value="min">Min</option>'+
        '</select> </div>' +
        '<div id="use'+divID+'" class="qb_parts" style="margin-left: 3%">'+
        '<p> Select Use </p>'+
        '<select id="use" name="use_select" class="rowselect" style="width: 100%">'+
            '<option value="filter">Filter</option>'+
            '<option value="value">Value</option>'+
            '<option value="row">Row Label</option>'+
            '<option value="col">Column Label</option>'+
        '</select> </div>' +
        '<div id="button'+divID+'" style="float: right; margin-top: 18px;">'+
        '<a href="javascript:AddQuery('+divID+')" class="AddQuery">+</a></div>'+
        '</div> '+
        '<div class="queryTable" style="height: 45%"><hr><table id="qtable'+divID+'" style="float:left; border-color: #000000; width: 100%" ><tbody>'+
        '</tbody></table></div>'+
        '<div id="querybuttons'+divID+'" style="width: 30%; margin-top: 5px; margin-left: 35%;">'+
        '<a href="javascript:AddQuery('+divID+')" class="AddQuery">Save</a>'+
        '<a href="javascript:AddQuery('+divID+')" class="AddQuery" style="float: right">Preview</a>'+
        '</div> </div>';

    $('.content_div').html(htmlcontent);
    
    //var locationDropDown ='<form  id="locationform'+dialogId+'" class="locationform" style="margin:0px;width:185px">'+ '<select id="locationSelect'+dialogId+'" class="locationSelect" multiple="multiple" style="width:50px">'+  '<option value="India" selected>All Locations</option>'+ '</select></form>'
    var title_content = "";
    var pos = "";
    
    var windowTitle = "Create/Edit Reports"; 
    title_content  = '<table class="titlebar_cnt"><tr><td style="padding-left:4px">'+windowTitle+'</td> </tr> </table>';
    pos = {
        my: "center-(40+)% top+(0)%",
        at: "center bottom",
        of: ".content_div"
    }; 

    $('.Detail'+divID).dialog({
        width:710,
        height:300,
        closeOnEscape: false,
        position: pos , // 'left+230 top+7%',
        resizable: true,        
        draggable:true,
        title:title_content,
        close:function(){
            $(this).dialog("destroy");
        },
        open:function(){},
        titleButtons : [ {
            icon : "newwin",
            text : "Pin/Unpin",
            callBack : function(element) {
                popUp(0,"html,body");
                QueryBuilder()
                popUp(1,"html,body");
            }
        } ]
    }) 
    
    $('.Detail'+divID).removeClass('ui-corner-all');
    $('.Detail'+divID).parent().removeClass('ui-corner-all').css("top","100px");
    $('.Detail'+divID).prev().removeClass('ui-corner-all');
    $('.Detail'+divID).removeClass('ui-corner-all');
    $('.Detail'+divID).find('.Detail_tabs ul').removeClass('ui-widget-header ui-corner-all');
    $('.Detail'+divID).find('.Detail_tabs ul li').removeClass('ui-widget-header ui-corner-all');   
    $('.Detail'+divID).find('.Detail_tabs').tabs({
        active:0
    })  
}

function AddQuery(divID) {
    //$('.Detail'+divID).find('.queryTable table tbody').html('');
    
    var table = $('#tables'+divID).find('.rowselect').children(":selected").attr("value");
    var field = $('#fields'+divID).find('.rowselect').children(":selected").attr("value");
    var logic = $('#logic'+divID).find('.rowselect').children(":selected").attr("value");
    var use = $('#use'+divID).find('.rowselect').children(":selected").attr("value");
    
    var row = "<tr><td>"+table+"</td> <td>"+field+"</td> <td>"+logic+"</td><td>"+use+"</td></tr>";
    $('.Detail'+divID).find(' .queryTable table tbody').append(row);
    
}

/*Function cal to get the image based on request with limit of 12 
* Response contains Image names and Total image count   */
function photoGrid(sIndex,queryId,dialogId){    
    var filter,location,dateString;
    var photos = null;
    
    filter = $('.Detail'+dialogId+' #SearchBox'+dialogId).val();
    location = $('#locationSelect'+dialogId).multiselect("getChecked").val();
    dateString = $('#dateRangePick'+dialogId).val();
    photoGrid.counter = sIndex+1;
    
    var argument = encodeURIComponent('{"QueryId":"'+queryId+'","requestType":"photos","filter":"'+filter+'","location":"'+location+'","dateRange":"'+dateString+'","startIndex":"'+sIndex+'"}');
    
    $("#content"+dialogId).html('<div style="text-align: center; font-weight: bold; margin: 180px auto 0px;" ><span style="top:100px;">Loading...</span></div>');
    $.ajax({  
        type: "POST",
        cache:false,
        async:false,
        data:'detailsRequest='+argument,
        url: "DetailsController",  
        dataType: "json"
    }).done(function(res) {
        photos = res.photos;
    }); 
    startIndex[dialogId] = sIndex;
    images =  photos[0].images.split(', ');
    aboutPhoto = photos[0].aboutPhoto.split(';');
    descriptions = photos[0].descriptions.split('@@');
    
    totalImageCount[dialogId] = photos[0].imageCount;
    if(totalImageCount[dialogId] != 0){
        $('.Detail'+dialogId+' .totalCount').text(totalImageCount[dialogId]);    
        $('.Detail'+dialogId+' #first_image_num'+dialogId).text((sIndex+1));
        $('.Detail'+dialogId+' #last_image_num'+dialogId).text(sIndex+images.length);        
        if(totalImageCount[dialogId] == (sIndex+images.length) ){
            $('.Detail'+dialogId+' #next_page'+dialogId).attr("disabled",true);           
            $('.Detail'+dialogId+' #next_page'+dialogId).removeAttr('style'+dialogId);
            $('.Detail'+dialogId+' #next_page'+dialogId).css("color","#c2c2c2 !important");
        }else{
            $('.Detail'+dialogId+' #next_page'+dialogId).attr("disabled",false).css("cursor","default");           
            $('.Detail'+dialogId+' #next_page'+dialogId).removeAttr('style');
            $('.Detail'+dialogId+' #next_page'+dialogId).css("color","#2383D4 !important");
        }
    
        var dynamic_loading_images="";
        $("#content"+dialogId).remove();
        dynamic_loading_images+='<div id="content'+dialogId+'" style ="margin-top: 5px;" >' + 
                                '<div class="slider">'+
                                '<div id="imageSliderWrapper"><div id="imageSliderLargeImage'+dialogId+
                                                              '" class="imageSliderLargeImage"></div>'+ 
                                '<div id="imageSlider'+dialogId+'" class="imageSlider">';
    
       for(var i=0;i<images.length;i++){
            
            dynamic_loading_images+= '<div> ';
            dynamic_loading_images+= '<img alt="" src="'+ImageFolder+'thumbnails/'+images[i]+
                    '" largeImage="'+ImageFolder+'photos/'+images[i]+'">'+
                    '<div class="description">'+                 
                    '<div class="store-code"> Store Details <hr/>'+aboutPhoto[i]+'</div> <hr/>'+
                    '<div class="desc-table"><table cellpadding="0" cellspacing="1"><tr><td>'+descriptions[i]+
                    '</td></tr></table></div>'+   
                    '<div class="image-counter">'+photoGrid.counter+'/'+totalImageCount[dialogId]+'</div>'+
                    '</div></div>';
            
            photoGrid.counter++;
        }
        dynamic_loading_images+='</div>'+ 
                                '</div>'+
                                '</div>'+ 
                                '</div>';
        $('.Detail'+dialogId+' #photos_div'+dialogId).append(dynamic_loading_images);
        
        var sliderOptions=
        {
        	SliderId:"imageSlider"+dialogId,
        	AnimationType:"Horizontal",
        	ScrollInterval:3500,
        	ScrollDuration:600,
        	AutoScroll:true,
        	ScrollAllInView:false,
        	Circular:true
        };
        largeImageOptions = {
        		  largeImageContainerId: "imageSliderLargeImage"+dialogId,
        		  AutoDisplay: true,
        		  DisplayDescription: true,
        		  DescriptionAnimation: true
        };
        var imageSlider=new slider(sliderOptions);
      //  $(this).displayArrow();
    
    }else{
        
        $("#content"+dialogId).html('<div style="text-align: center; font-weight: bold; margin: 180px auto 0px;" ><span style="top:100px;">No DATA</span></div>');
    }
}

function prev(queryId,dialogId){
    $('.Detail'+dialogId+' #next_page'+dialogId).attr("disabled",false).css("cursor","default");
    $('.Detail'+dialogId+' #next_page'+dialogId).removeAttr('style');
    $('.Detail'+dialogId+' #next_page'+dialogId).css("color","#2383d4 !important");
    if(click_count[dialogId]>0){        
        startIndex[dialogId]=startIndex[dialogId]-12;
        if(startIndex[dialogId]==0){
            $('.Detail'+dialogId+' #prev_page'+dialogId).attr("disabled",true);    
            $('.Detail'+dialogId+' #prev_page'+dialogId).removeAttr('style');
            $('.Detail'+dialogId+' #prev_page'+dialogId).css("color","#c2c2c2 !important");
        }
        click_count[dialogId]=click_count[dialogId]-1;
        $('.Detail'+dialogId+' #first_image_num'+dialogId).text((startIndex[dialogId]+1));
        $('.Detail'+dialogId+' #last_image_num'+dialogId).text(startIndex[dialogId]+images.length);
        photoGrid(startIndex[dialogId],queryId,dialogId);
    }        
}
function next(queryId,dialogId){
    $('.Detail'+dialogId+' #prev_page'+dialogId).attr("disabled",false).css("cursor","default");
    $('.Detail'+dialogId+' #prev_page'+dialogId).removeAttr('style');
    $('.Detail'+dialogId+' #prev_page'+dialogId).css("color","#2383d4 !important");
    click_count[dialogId]=click_count[dialogId]+1;
    if(click_count[dialogId]>0 && startIndex[dialogId]<=totalImageCount[dialogId]){
        startIndex[dialogId]=click_count[dialogId]*12; 
        if(startIndex[dialogId]==(totalImageCount[dialogId]-1)){
            $('.Detail'+dialogId+' #next_page'+dialogId).attr("disabled",true);           
            $('.Detail'+dialogId+' #next_page'+dialogId).removeAttr('style');
            $('.Detail'+dialogId+' #next_page'+dialogId).css("color","#c2c2c2 !important");
        }
        $('.Detail'+dialogId+' #first_image_num'+dialogId).text((startIndex[dialogId]+1));
        $('.Detail'+dialogId+' #last_image_num'+dialogId).text(startIndex[dialogId]+images.length);        
        photoGrid(startIndex[dialogId],queryId,dialogId);
    }    
}

function showPhotos(dialogId, queryId, row, column)
{
    var dateString = $('#dateRangePick'+dialogId).val();
    var selectedLocation = $('#locationSelect'+dialogId).multiselect("getChecked").val();
    var locationmultiselect =  $('#locationSelect'+dialogId);
    var filter = row + "," + column;
    var rowSelect = $('#numbers_div'+dialogId).find('.rowselect'+dialogId).children(":selected").attr("value");
    if(typeof rowSelect!='undefined') filter += "," + rowSelect.split("=")[1];

    $('.Detail'+dialogId).find('.Detail_tabs').tabs("option","active",2);
    locationmultiselect.multiselect('refresh');

    $('.Detail'+dialogId+' #SearchBox'+dialogId).val(filter);
    photoGrid(0,queryId,dialogId);            
}
///$("#content a[href='http://']").attr("target","_blank");