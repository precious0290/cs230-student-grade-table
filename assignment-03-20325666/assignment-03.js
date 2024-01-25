
//previous notes to help me w the average and changing the avergage col per required val
// make all the rows 1

/* $(this).find('.grades').html(avg);
        if(avg < 60) {
            $(this).find('.grades').css({"background-color": "red"});
        }
        else
        {
            $(this).find('.grades').css({"background-color": "black"});
        }
         document.getElementById("assignmentsSub").innerHTML = "Number of Assignments Not Submitted: " + notSubmitted
   */

var clickCount=0;
let avg=null;

 GradesCalc=()=>{

    /*
    
   -> need for loop to iterate through coloumns-> for the assignments
   ->add them up
  ->divide by 5 because thats the number od assignments
   ->use math.round to round up
   element.style.color
    */
  
     var table = document.getElementById("GradesTable");
  var rows = table.rows;
   
    var notSubmitted=0;
  for(var i = 1; i < rows.length; i++){
    var cells = rows[i].cells;
    var sum = 0;
    var numbers = 0;
    for (var j = 2; j < (cells.length -1); j++) {
      var currentGrade = parseInt(cells[j].innerHTML);
        if(currentGrade >=0 && currentGrade <=100) //isNaN() not workin properly -> the conditions work well for  chars such as  the normal alphabet , howver it fails with numberLetter sequences such as 6f , 8g etc, and i dont know why
            {
                  sum += currentGrade;
        numbers++;
            }
        else{
             numbers++; //counts number of amount of assignments
          notSubmitted++; //counts how mnay have not been submitted
          rows[i].cells[j].innerHTML="-";//else is gets replaced by -
             rows[i].cells[j].style.textAlign = "center";// position of the -
        }
    
    }
      
         avg = sum / numbers;
        avg = Math.round(avg);
       
        
      if(avg < 60)  //as
            {
              rows[i].cells[cells.length - 1].style.background = "red"; //https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_style_color
              rows[i].cells[cells.length - 1].style.color = "white";
                 rows[i].cells[cells.length - 1].style.textAlign = "right";
            }
      else {
          rows[i].cells[cells.length - 1].style.background = "initial"; //inherits gave me problems, so i used initial to get around it-> https://www.w3schools.com/cssref/css_initial.asp
              rows[i].cells[cells.length - 1].style.color = "black";
      }
   rows[i].cells[cells.length - 1].innerHTML = "<td>" + Math.round(avg) + "%" + "</td>";//i know the average col is the last one so like in normal java we always do arr.length-1 to get the last element
         
     document.getElementById("assignmentsSub").innerHTML = "Number of assignments not submitted: " + notSubmitted; /*https://www.w3schools.com/js/js_output.asp */
}
     console.log("being called1");
}


function yellowCell()//changes the middle cells w "-" to yellow with it in the center position
{
    
     var table = document.getElementById("GradesTable");
      var rows = table.rows;
/*https://stackoverflow.com/questions/27311908/change-background-color-of-table-cells-according-to-their-header */
    for (var z = 1; z < rows.length; z++) {
    for (var a = 2; a < rows[z].cells.length-1; a++) {
      
        if (rows[z].cells[a].innerHTML == "-") { /*https://www.google.com/search?q=is+innerhtml+a+string&oq=i&aqs=chrome.1.69i60j69i59l3j69i60l2j69i65l2.2055j0j7&sourceid=chrome&ie=UTF-8 */
            rows[z].cells[a].style.backgroundColor = "yellow";
        }
        else{
            rows[z].cells[a].style.backgroundColor = "initial";
         
rows[z].cells[a].style.textAlign="right";//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_style_textalign
        }
        
       
    }
    
        
}
    console.log("being called2");
    }


    /*var th = document.querySelectorAll('th')
for (let cell of th) {
  if(cell.innerHTML === 'Expected'){
    cell.style.backgroundColor = 'green'
  }
  if(cell.innerHTML === 'Missing'){
    cell.style.backgroundColor = 'red'
  }
}*/
    

function gradeRedCell() //changes the average column to red
    {
      
         var table = document.getElementById("GradesTable");
      var rows = table.rows;
/*https://stackoverflow.com/questions/27311908/change-background-color-of-table-cells-according-to-their-header */
    for (var z = 1; z < rows.length; z++) {
         var cells = rows[z].cells;
        if (rows[z].cells[cells.length-1].innerHTML == "-") { /*https://www.google.com/search?q=is+innerhtml+a+string&oq=i&aqs=chrome.1.69i60j69i59l3j69i60l2j69i65l2.2055j0j7&sourceid=chrome&ie=UTF-8 */
            rows[z].cells[cells.length-1].style.backgroundColor = "red";
            rows[z].cells[cells.length-1].style.textAlign = "right";
             rows[z].cells[cells.length-1].innerHTML = "0%";
             
        }
        else{
             rows[z].cells[cells.length-1].style.backgroundColor = "initial";
        }
        
       
    
    }
         console.log("being called3");
    }

function gradeType() //changes the grade type
{
    clickCount++;
     console.log("being called4");
    
    if(clickCount ==1)
        {
            
             
            document.getElementById("avgTitle").innerHTML="Average [Letter]";
        return  percentToLetter();//calls on first click to change from percent to american letter grade
            
        }
    else if(clickCount==2)
        {
           
            document.getElementById("avgTitle").innerHTML="Average [4.0]";
            return percentToScale(); //calls on second click to get percentage to american scale grade 
        }
    else{
        document.getElementById("avgTitle").innerHTML="Average [%]";
        GradesCalc(); // calls the percentage calc
        clickCount=0;//click reverts back to 0
    }
    
}

function percentToLetter() //calc for percent to Letter
{   
    var notSubmitted=0;//had probelms w the notSubmitted var as i didnt reset it so i reset it in here and the percentToScale
   var table = document.getElementById("GradesTable");
      var rows = table.rows;
/*https://stackoverflow.com/questions/27311908/change-background-color-of-table-cells-according-to-their-header */
    
     for(var z = 1; z < rows.length; z++){
    var cells = rows[z].cells;
    var sum = 0;
    var numbers = 0;
    for (var j = 2; j < (cells.length -1); j++) {
        var cell = cells[j];
      var currentGrade = parseInt(cell.innerHTML);
        if(!isNaN(currentGrade)&&currentGrade >= 0 && currentGrade <=100)
            //so this condition basically means if the grade is a number in this set. its valid, /*https://www.w3schools.com/js/js_comparisons.asp */
            {
        sum += currentGrade;
        numbers++;
            }
        else{
             numbers++; //counts number of amount of assignments
          notSubmitted++; //counts how mnay have not been submitted
          rows[z].cells[j].innerHTML="-";//else is gets replaced by -
        }
    
    }
      
         avg = sum / numbers;
        avg = Math.round(avg);
         console.log(avg);
        if (avg >= 93 && avg <=100) { /*https://www.google.com/search?q=is+innerhtml+a+string&oq=i&aqs=chrome.1.69i60j69i59l3j69i60l2j69i65l2.2055j0j7&sourceid=chrome&ie=UTF-8 */
             rows[z].cells[cells.length-1].innerHTML ="<td>"+ "A"+ "</td>";
        }
        else if(avg >= 90 && avg <=92){
             rows[z].cells[cells.length-1].innerHTML = "<td>"+"A-"+"</td>";
        }
         else if(avg >= 87 && avg <=89){
             rows[z].cells[cells.length-1].innerHTML = "<td>" +"B+" +"</td>";
        }
         else if(avg >= 83 && avg <=86){
             rows[z].cells[cells.length-1].innerHTML = "<td>"+ "B"+ "</td>";
        }
         else if(avg >= 80 && avg <=82){
             rows[z].cells[cells.length-1].innerHTML = "<td>"+ "B-"+"</td>";
        }
         else if(avg >= 77 && avg <=79){
             rows[z].cells[cells.length-1].innerHTML = "<td>"+ "C+"+"</td>";
        }
         else if(avg >= 73 && avg <=76){
             rows[z].cells[cells.length-1].innerHTML = "<td>"+ "C"+"</td>";
        }
         else if(avg >= 70 && avg <=72){
             rows[z].cells[cells.length-1].innerHTML = "<td>"+ "C-"+"</td>";
        }
         else if(avg >= 67 && avg <=69){
             rows[z].cells[cells.length-1].innerHTML = "<td>"+ "D+"+"</td>";
        }
         else if(avg >= 63 && avg <=66){
             rows[z].cells[cells.length-1].innerHTML ="<td>" +"D"+ "</td>";
        }
         else if(avg >= 60 && avg <=62){
             rows[z].cells[cells.length-1].innerHTML ="<td>"+ "D-"+ "</td>";
        }
         else{
             rows[z].cells[cells.length-1].innerHTML ="<td>"+ "F"+ "</td>";
        }
         
      if(avg < 60)  //as
            {
              rows[z].cells[cells.length - 1].style.background = "red"; //https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_style_color
              rows[z].cells[cells.length - 1].style.color = "white";
            }
      else {
          rows[z].cells[cells.length - 1].style.background = "initial"; //inherit gave me problems
              rows[z].cells[cells.length - 1].style.color = "black";
      }
         
     document.getElementById("assignmentsSub").innerHTML = "Number of assignments not submitted: " + notSubmitted; /*https://www.w3schools.com/js/js_output.asp */
}
 
       console.log("being called5");

   
}
function percentToScale()//calc for percentToScale
{
   
    var notSubmitted=0;
    var table = document.getElementById("GradesTable");
   avg=GradesCalc();
    
      var rows = table.rows;
/*https://stackoverflow.com/questions/27311908/change-background-color-of-table-cells-according-to-their-header */
    for(var z = 1; z < rows.length; z++){
    var cells = rows[z].cells;
    var sum = 0;
    var numbers = 0;
    for (var j = 2; j < (cells.length -1); j++) {
        var cell = cells[j];
      var currentGrade = parseInt(cell.innerHTML);
        if(!isNaN(currentGrade)&&currentGrade >= 0 && currentGrade <=100)
            //so this condition basically means if the grade is a number in this set. its valid, /*https://www.w3schools.com/js/js_comparisons.asp */
            {
        sum += currentGrade;
        numbers++;
            }
        else{
             numbers++; //counts number of amount of assignments
          notSubmitted++; //counts how mnay have not been submitted
          rows[z].cells[j].innerHTML="-";//else is gets replaced by -
            
        }
    
    }
      
         avg = sum / numbers;
        avg = Math.round(avg);
         console.log(avg);
        
        if (avg >= 93 && avg <=100) { /*https://www.google.com/search?q=is+innerhtml+a+string&oq=i&aqs=chrome.1.69i60j69i59l3j69i60l2j69i65l2.2055j0j7&sourceid=chrome&ie=UTF-8 */
             rows[z].cells[cells.length-1].innerHTML ="<td>"+ "4.0"+"</td>";
        }
        else if(avg >= 90 && avg <=92){
             rows[z].cells[cells.length-1].innerHTML ="<td>"+ "3.7"+"</td>";
        }
         else if(avg >= 87 && avg <=89){
             rows[z].cells[cells.length-1].innerHTML ="<td>"+ "3.3"+"</td>";
        }
         else if(avg >= 83 && avg <=86){
             rows[z].cells[cells.length-1].innerHTML ="<td>"+ "3.0"+"</td>";
        }
         else if(avg >= 80 && avg <=82){
             rows[z].cells[cells.length-1].innerHTML ="<td>"+ "2.7"+"</td>";
        }
         else if(avg >= 77 && avg <=79){
             rows[z].cells[cells.length-1].innerHTML = "<td>"+ "2.3"+"</td>";
        }
         else if(avg >= 73 && avg <=76){
             rows[z].cells[cells.length-1].innerHTML = "<td>"+"2.0"+"</td>";
        }
         else if(avg >= 70 && avg <=72){
             rows[z].cells[cells.length-1].innerHTML = "<td>"+"1.7"+"</td>";
        }
         else if(avg >= 67 && avg <=69){
             rows[z].cells[cells.length-1].innerHTML = "<td>"+"1.3"+"</td>";
        }
         else if(avg >= 63 && avg <=66){
             rows[z].cells[cells.length-1].innerHTML = "<td>"+ "1.0"+ "</td>";
        }
         else if(avg >= 60 && avg <=62){
             rows[z].cells[cells.length-1].innerHTML ="<td>"+ "0.7"+"</td>";
        }
         else if( avg <60){
             rows[z].cells[cells.length-1].innerHTML ="<td>"+ "0.0"+"</td>";
        }
        
        if(avg < 60)  //as
            {
              rows[z].cells[cells.length - 1].style.background = "red"; //https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_style_color
              rows[z].cells[cells.length - 1].style.color = "white";
            }
      else {
          rows[z].cells[cells.length - 1].style.background = "initial"; //inherit gave me problems
              rows[z].cells[cells.length - 1].style.color = "black";
      }
   
         

  
}
      console.log("being called6");
}
//https://stackoverflow.com/questions/18333427/how-to-insert-a-row-in-an-html-table-body-in-javascript
//https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/insertRow
//https://www.w3schools.com/jsref/met_table_insertrow.asp#:~:text=The%20insertRow()%20method%20creates,%3E%20or%20elements.
//https://stackoverflow.com/questions/49310727/load-table-from-saved-cookie
RowAdd =()=> //adds rows
{    
    yellowCell();
     var table = document.getElementById("GradesTable");
      var rows = table.rows;
   row = table.insertRow(table.rows.length);      // append table row
       var i;
    // insert table cells to the new row
       
    for (i = 0; i < table.rows[0].cells.length; i++) {
        var createCell =row.insertCell(i);
        if( i < 2)
            {
                 createCell.setAttribute("class","names");
                createCell.setAttribute("contenteditable","true");
                
                    
                
            }
        else if(i >=2 && i < table.rows[0].cells.length-1)
            {
                createCell.setAttribute("contenteditable","true");
                createCell.style.backgroundColor="yellow";
                
                createCell.setAttribute("oninput","yellowCell(),GradesCalc()");
                 
            }
        else{
            createCell.setAttribute("id","grades");
         
        }
     
   
         
        
        
    }
    
    
       
     console.log("being called7");
}
//https://www.reddit.com/r/learnprogramming/comments/j3hm67/how_to_insert_the_cells_inside_of_each_row_for_a/
var startCol=7; //started on 6 but the col came b4 assignment 5 so i upped the startcol by 1-> we have to insert new  columns for the assignments only
ColAdd=()=>//adds columns for assignments
{
     var table = document.getElementById("GradesTable");
     var rows=table.rows;
      for (var i =0; i < rows.length; i++) {
        var createCell =rows[i].insertCell(startCol);
           if( i < 1)
            {
                 createCell.setAttribute("class","assignments");
                createCell.innerHTML="Assignment "+(startCol-1); //this gives my columns headings
                
                    
                
            }
        else if(i >=1)
            {
                //this gives them attributes
             
                  createCell.style.backgroundColor="yellow";
                 createCell.style.textAlign="center";
                 createCell.innerHTML="-";
                   createCell.setAttribute("contenteditable","true");
                 createCell.setAttribute("oninput","yellowCell(),GradesCalc()");
                 
            }
      
   
}
     console.log("being called8");
    startCol++;
}
//https://stackoverflow.com/questions/49272944/set-and-load-table-data-with-cookie
//https://stackoverflow.com/questions/49310727/load-table-from-saved-cookie
//the following i got from here^
function saveGradeTable() {
  var table = document.getElementById("GradesTable");
  var noOfRows = table.rows[0].cells.length; // amount of cols
     var noOfCols = table.rows.length;
     var data = '';
     for(var a = 1; a < table.rows.length; a++)
     {
         for(var b= 0; b < table.rows[0].cells.length-1; b++)
        {
                data += table.rows[a].cells[b].innerHTML + ",";
          }
     }
   setCookie("data", data, noOfCols, noOfRows, 60);
    alert("Cookie Saved");

}

function setCookie(cname, cvalue, exdays) {

  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function LoadGradeTable() {//i dont know how to call
      var table = document.getElementById("GradesTable");
  var data = getCookies("data");
  var rowsLength = table.rows.length;
  var endOfCol = table.rows[0].cells.length;
  var array = data.split(',');
  var count = 0;
  for(var i =1;i<rowsLength;i++)
  {
    for(var j = 0; j < endOfCol-1; j++)
    {       
      table.rows[i].cells[j].innerHTML = array[count];
      count++;
    }
  }
}


function getCookies(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
   

    //code i found to try help me with the rows


    /*function changeSort(th){
    var titleTemplates = {
        asc:  'sort ascending %s',
        desc: 'sort decending %s',
        dflt: 'sort by %s'
    };
    titleTemplates.get = function(key, txt){
        var t = this[key] || this.dflt;
        return t.replace('%s', txt);
    };
    var headerRow = th.parentNode;
    var cells = headerRow.getElementsByTagName('th');
    for(var i=0; i<cells.length; i++){
        var c = cells[i];
        var s = c.getAttribute('sortCode');
        var s_ = (c !== th) ? '' : (!s || s == 'desc') ? 'asc' : 'desc';
        c.setAttribute('sortCode', s_);
        c.title = titleTemplates.get(s_, c.innerHTML);
    }
} */




