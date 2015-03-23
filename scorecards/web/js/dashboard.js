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
        ShowWidget(rvalue);
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

    windowContent = 
    '<div class="Detail'+divID+'" style="background-color: white;"> '+ '<div class="Detail_tabs btabs" style=" "> '+
    '<div id="numbers_div'+divID+'" class="bdivs">'+
    '<div class="numbersTable"><table id="ntable'+divID+'" style="float:left" ><tbody></tbody></table></div>'+'</div>'+
    '<div id="charts_div'+divID+'" class="bdivs">'+
    '</div>' +
    '<div id="chart'+divID+'" style="margin-top: 20px;" ></div>'+
    '<div  id="table_div_bar'+divID+'"  name="table_div_bar" style="margin-left:0px;width:550px;margin-top:0% " ></div>'+
    '</div>'+'</div>';
    return windowContent;
}

/* Funciton Used to intialize the window into Html DOM and contents related to the Window
 * And function calls based on request
 * */
var dialogId = 0;
function ShowWidget(QueryId){  //detailsWindow  
    dialogId++;
    
    var htmlcontent = windowContent("Widget",dialogId);
    //var htmlcontent = windowContent("BlankWindow",dialogId);
    
    $('.content_div').html(htmlcontent);
    var title_content = "";
    var pos = "";
    
    windowTitle = QueryId;
    
    title_content  = '<table class="titlebar_cnt"><tr><td style="padding-left:4px">'+windowTitle+'</td></tr> </table>'
    pos = {
        my: "center+(40)% top-(40)%", 
        at: "center top",
        of: ".content_div"
    }; 
   
    $('.Detail'+dialogId).dialog({
        width:600,
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
    getWidgetData(QueryId,dialogId);
    intializeDatepicker(QueryId,dialogId);
}

/* Funciton Used to set the window dynamic content for multiple windows  
* through requests and response data contains common data related to three tabs i.e Numbers, Charts, Photos */



function getWidgetData(QueryId,dialogId){
    popUp(0,"html,body");

    $('.Detail'+dialogId+'.storeAuditedMsg').html('');
    var dateString = $('#dateRangePick'+dialogId).val();
    var selectedLocation = $('#locationSelect'+dialogId).multiselect("getChecked").val();
    
    var chartArray=null;
    
    $.ajax({  
        type: "POST",  
        cache:false,
        async:false,
        data:'detailsRequest={"QueryId":"'+QueryId+'","requestType":"widget","location":"'+selectedLocation+'","dateRange":"'+dateString+'"}',
        url: "DetailsController",  
        dataType: "json"
    }).done(function(res) {
        chartArray = res.charts;
    });    
    
    if(chartArray.length == 1){  //Checking if data is NULL
        $('.Detail'+dialogId+' #chart'+dialogId).html('<div style="text-align: center; font-weight: bold; margin: 180px auto 0px;" ><span style="top:100px;">NO DATA</span></div>');
    }else{
        var transposed = chartArray;
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
        
        var chart = new google.visualization.PieChart(document.getElementById('chart'+dialogId));
        var table = new google.visualization.Table(document.getElementById('table_div_bar'+dialogId));
        table.draw(cdata, {showRowNumber: true, height :150, style: 'font-style:bold; font-size:22px;'});
        chart.draw(cdata, options);
    }
    popUp(1,"html,body");      
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
    ShowWidget(rvalue);
}

///$("#content a[href='http://']").attr("target","_blank");