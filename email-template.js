module.exports = data => { return  {
    html: `
    <div style="width:100%;padding:24px 0 16px 0;background-color:#f5f5f5;text-align:center">
    <div style="display:inline-block;width:90%;max-width:680px;min-width:280px;text-align:left;font-family:Roboto,Arial,Helvetica,sans-serif">
    <div style="height:0px" dir="ltr"></div>
    <div style="display:block;padding:0 2px">
    <div style="display:block;background:#fff;height:2px"></div></div>
    <div style="border-left:1px solid #f0f0f0;border-right:1px solid #f0f0f0">
    <div style="padding:24px 32px 24px 32px;background:#fff;border-right:1px solid #eaeaea;border-left:1px solid #eaeaea" dir="ltr">
    <div style="font-size:14px;line-height:18px;color:#444">
    <a href="mailto:${data.email}" style="color:inherit;text-decoration:none" target="_blank">${data.email}</a> has invited you to <b>edit</b> the following document:</div>
    <div style="height:10px"></div>
    <div style="font-size:18px;display:table">
    <div style="display:table-row;border-bottom:4px solid #fff"><span style="display:table-cell">
    <div style="height:32px"><img src="https://ci3.googleusercontent.com/proxy/3bzENwEW62gLeJ4iYwnJgcn1npAd7FldlFipAR5slX2X8KHFWHvF9kIbkoOOqzPsfF8aSAikDAAS4FYGMvDvw9MnAY5AJJzSnlEUR_5v5utWppoai6N8p4fN9Hj2R6GlDg=s0-d-e1-ft#https://ssl.gstatic.com/docs/documents/share/images/services/document-4.png" aria-label="Document" style="vertical-align:middle;max-width:24px"></div></span><span style="display:table-cell;padding-left:12px;word-break:break-word">
    <a href="${data.fileUrl}" style="color:#3367d6;text-decoration:none;vertical-align:middle" target="_blank" data-saferedirecturl="${data.fileUrl}">${data.fileName}</a>
    <div></div></span></div></div>
    <div style="height:32px"></div>
    <div>
    <a href="${data.fileUrl}" style="background-color:#4d90fe;border:1px solid #3079ed;border-radius:2px;color:white;display:inline-block;font-family:Roboto,Arial,Helvetica,sans-serif;font-size:11px;font-weight:bold;height:29px;line-height:29px;min-width:54px;outline:0px;padding:0 8px;text-align:center;text-decoration:none" target="_blank" data-saferedirecturl="${data.fileUrl}">Open in Docs</a></div></div></div><table style="width:100%;border-collapse:collapse" role="presentation"><tbody><tr><td style="padding:0px"><table style="border-collapse:collapse;width:3px" role="presentation"><tbody><tr height="1"><td width="1" bgcolor="#f0f0f0" style="padding:0px"></td><td width="1" bgcolor="#eaeaea" style="padding:0px"></td><td width="1" bgcolor="#e5e5e5" style="padding:0px"></td></tr><tr height="1"><td width="1" bgcolor="#f0f0f0" style="padding:0px"></td><td width="1" bgcolor="#eaeaea" style="padding:0px"></td><td width="1" bgcolor="#eaeaea" style="padding:0px"></td></tr><tr height="1"><td width="1" bgcolor="#f5f5f5" style="padding:0px"></td><td width="1" bgcolor="#f0f0f0" style="padding:0px"></td><td width="1" bgcolor="#f0f0f0" style="padding:0px"></td></tr></tbody></table></td><td style="width:100%;padding:0px">
    <div style="height:1px;width:auto;border-top:1px solid #ddd;background:#eaeaea;border-bottom:1px solid #f0f0f0"></div></td><td style="padding:0px"><table style="border-collapse:collapse;width:3px" role="presentation"><tbody><tr height="1"><td width="1" bgcolor="#e5e5e5" style="padding:0px"></td><td width="1" bgcolor="#eaeaea" style="padding:0px"></td><td width="1" bgcolor="#f0f0f0" style="padding:0px"></td></tr><tr height="1"><td width="1" bgcolor="#eaeaea" style="padding:0px"></td><td width="1" bgcolor="#eaeaea" style="padding:0px"></td><td width="1" bgcolor="#f0f0f0" style="padding:0px"></td></tr><tr height="1"><td width="1" bgcolor="#f0f0f0" style="padding:0px"></td><td width="1" bgcolor="#f0f0f0" style="padding:0px"></td><td width="1" bgcolor="#f5f5f5" style="padding:0px"></td></tr></tbody></table></td></tr></tbody></table><table style="padding:14px 10px 0 10px" role="presentation" dir="ltr"><tbody><tr><td style="width:100%;font-size:11px;font-family:Roboto,Arial,Helvetica,sans-serif;color:#646464;line-height:20px;min-height:40px;vertical-align:middle">Google Docs: Create and edit documents online. <br>Google LLC, 
    <a href="https://maps.google.com/?q=1600+Amphitheatre+Parkway,+Mountain+View,+CA+94043,+USA&amp;entry=gmail&amp;source=g" data-saferedirecturl="https://www.google.com/url?q=https://maps.google.com/?q%3D1600%2BAmphitheatre%2BParkway,%2BMountain%2BView,%2BCA%2B94043,%2BUSA%26entry%3Dgmail%26source%3Dg&amp;source=gmail&amp;ust=1520991146980000&amp;usg=AFQjCNH9r6i_G0e7OHxjrNyfMdKMUqTdXQ">1600 Amphitheatre Parkway, Mountain View, CA 94043, USA</a><br> You have received this email because someone shared a document with you from Google Docs.</td><td style="padding-left:20px;vertical-align:middle">
    <a href="https://drive.google.com" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://drive.google.com&amp;source=gmail&amp;ust=1520991146981000&amp;usg=AFQjCNGmrz56MHcqWtCeWUnnBkcrhjmj4Q"><img src="https://ci5.googleusercontent.com/proxy/3VHY_OM67IpaFsv7IaeGEy6mMDKpRx57oeeEzdvYHDYWq_LabambVV_RCUrohmMueofcw5NN-chcGi6lfMs_Gni7PsSQey8Rxh_DVTVonsQU_0JAk56RR-e6tiwMqNbjaNGYRhktUuoXwGeAJ8FeSxs4fA=s0-d-e1-ft#https://www.gstatic.com/images/branding/googlelogo/1x/googlelogo_tm_black54_color_96x40dp.png" width="96" alt="Logo for Google Docs" border="0"></a></td></tr></tbody></table></div></div>
    `,
    
    plainText:
    
`I've shared an item with you:

${data.fileName}
${data.fileUrl}

It's not an attachment -- it's stored online. To open this item, just click  
the link above.`
    
}};