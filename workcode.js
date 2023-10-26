function onEdit(e) {
    if (e && e.source) {
      var spreadsheet = e.source;
      var sheetNamesToMonitor = ['YOUR_SHEET_NAME','YOUR_SHEET_NAME']; 
      var range = e.range;
      var sheet = e.source.getSheetByName(range.getSheet().getName()); 
    
      if (sheet && sheetNamesToMonitor.includes(sheet.getName())) {
        var sheetName = sheet.getName(); 
        var documentName = spreadsheet.getName();
        var editedValue = e.value;
  
        var timestamp = Utilities.formatDate(new Date(), "GMT+3", "yyyy-MM-dd HH:mm:ss");
    
  
        var botToken = 'YOUR_BOT_TOKEN'; 
        var chatId = 'YOUR_CHAT_ID'; 
    
        var user = Session.getActiveUser();
        var userName = user.getUserLoginId(); 
    
        var message = 'Зміни в Google Таблиці\n' +
          'Документ: ' + documentName + '\n' + 
          'Аркуш: ' + sheetName + '\n' +
          'Час: ' + timestamp + '\n' +
          'Рядок: ' + range.getRow() + '\n' +
          'Користувач: ' + userName + '\n' +
          'Вміст: ' + editedValue;
    
        var url = 'https://api.telegram.org/bot' + botToken + '/sendMessage?chat_id=' + chatId + '&text=' + encodeURI(message);
    
    
        UrlFetchApp.fetch(url);
      }
    }
  } 