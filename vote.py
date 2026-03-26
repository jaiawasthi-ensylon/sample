can_vote = False
age = int(input("Enter your age"))
if(age >=18):
  can_vote = True
if(can_vote):
  print("The user is eligible to vote")
else:
  print("The user is not eligible to vote")