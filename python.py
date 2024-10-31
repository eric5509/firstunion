class Me:
    def __init__(self, name, age, address):
        self.name = name
        self.age = age
        self.address = address 
    def sayMyName(self):
        print(f"My name is {self.name}")

    def CheckIfIsAdult(self):
        if(self.age >= 18):
            return true
        else:
            return false

Mark = Me("Mark", 26, 'Jubril Olabisi')
isAdult
Mark.sayMyName()


