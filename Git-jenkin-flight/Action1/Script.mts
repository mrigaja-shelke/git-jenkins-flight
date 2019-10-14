Function login(Agent,Password)
systemutil.Run "C:\Users\Mrigaja.Shelke\Desktop\Flight GUI.lnk"
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("agentName").Set Agent
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("password").Set Password
button_status = WpfWindow("Micro Focus MyFlight Sample").WpfButton("OK").GetROProperty("enabled")
	If button_status=True Then
		WpfWindow("Micro Focus MyFlight Sample").WpfButton("OK").Click 
		If WpfWindow("Micro Focus MyFlight Sample").WpfObject("Hello").Exist(2) Then 
			login= "Login successfull"
		Else WpfWindow("Micro Focus MyFlight Sample").Dialog("Login Failed").WinButton("OK").Click 
			login= "Login unsuccessfull"
			WpfWindow("Micro Focus MyFlight Sample").WpfButton("Cancel").Click			
		End If
	else
		WpfWindow("Micro Focus MyFlight Sample").Close
		
	
	
	
			'LogIn="Login unsuccessfull"
		
End If
'msgbox login

End Function

Call login("john","HP")
WpfWindow("Micro Focus MyFlight Sample").Close
