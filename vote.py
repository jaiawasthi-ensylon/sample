can_vote = false
age = int(input("Enter your age"))
if(age <18):
  can_vote = true
if(can_vote):
  print("The user is eligible to vote")
else:
  print("The user is not eligible to vote")
  
