# Discord-Bot-for-Google-Sheets
## Project簡介
 * 使用Google Sheets所製作的管理用表格，使用Google Sheets內建函數和Apps Scripot提供多項自動化的實用功能，方便成員紀錄並查看整體進度，以及方便成員的管理和成員之間的協調。
 * 為了將前項Google Sheet表格的功能整合到成員所使用的通訊軟體Discord，以及解決移動設備上Google Sheets的使用不便所製作的Discord Bot。該Discord Bot部署於Glitch.com，藉由串接Discord和Apps Script之間的API，能夠接收Discord的語言指令並於表格對應的位置查詢並回傳資料，或是新增、刪除資料。

## Project說明
 * Project維護期間：2019年6月-2020年6月。
 * Project用途：提供遊戲「公主連結」的遊戲公會管理所用，在每個月底為期6-10天的遊戲活動中協助紀錄和追蹤每位成員每天的進度，讓遊戲活動進行的更有效率且有條不紊。
 * Project分為兩個部分，第一部分為Google Sheets所製作的管理用表格，第二部分為將Google Sheets表格功能整合到Discord通訊軟體，下面會分別介紹。

## Google Sheets
表格連結：https://docs.google.com/spreadsheets/d/1bDlzXZTpRtHw6hmU--NjmMHmbP_zLikhdyDAU-RQjBo/edit?usp=sharing  
 
表格主要功能
 * 提供成員紀錄當日的進度，追蹤每位成員以及整體公會的進度。
 * 提供成員事先預約要進行的項目，並自動整合所有未進行的預約項目為單一表格。
 * 提供多個統計表格，以不同的方式呈現整體公會本月活動的進行狀況。
 * 使用顏色提示表格填寫狀況，錯誤填寫、缺漏填寫等都有對應的顏色進行提示。
 * 多項自動化功能，包括自動備份、自動換日等。
  
## Discord Bot
Discord Bot主要功能
 * 將前項Google Sheets表格的功能整合至通訊軟體Discord，可以透過Discord的語言指令於表格對應的位置查詢並回傳資料，或是新增、刪除資料。
 * 利用Discord的Mentions功能，能夠利用簡單的指令傳送通知給所有有預約項目的成員。
 * 將計算機的功能整合到Discord。
