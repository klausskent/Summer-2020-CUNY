 // forEach()

 let ListOfFruit = ["pinapple", "apple", "strawberry", "pear", "cherry"]
const myEach = function(list, cb)
{
  for(let i = 0; i < list.length; i++)
  {
    if(cb)
    {
      cb(list[i])
    }
  }
}

function CallBack (item)
{
  console.log(item)
}

myEach(ListOfFruit, CallBack)

// map()

let ListOfNum = [4, 2, 7, 1, 9, 3]
const myMap = function(map, cb)
{
  let i
  for(i = 0; i < map.length; i++)
  {
    map[i] = map[i]*2
  }
  let[one, two, three, four, five, six] = map
  cb(map)
  
}

function CallBackTwo(item)
{
  console.log("New Array")
  console.log(item)
}

myMap(ListOfNum, CallBackTwo)

// filter()

let listOfWords = [6, 34, 11, 12, 45, 87, 45, 37, 62]
const myFilter = function(largest, cb)
{
  let num = 0
  for(let i = 0; i < largest.length; i++)
  {
    if(largest[i] >= 40)
    {
      largest.splice(i, 4)
    }
  } 
  let[one, two, three, four] = largest
  cb(largest)
}

function CallBackThree(item)
{
  console.log(item)
}

myFilter(listOfWords, CallBackThree)

// some() (aka any())
let ListOfEven = [2, 4, 6, 8, 10, 12, 14, 16]

const mySome = function(Even, cb)
{
  let num = 0;
  for(let i = 0; i < Even.length; i++)
  {
    if(Even[i] % 4 == 0)
    {
      num++
    }
  }

  if(num >= 4)
  {
    cb(true)
  }
}

function CallBackFour(item)
{
  console.log(item)
}


mySome(ListOfEven, CallBackFour) 

//every()

let ListOfTimesThree = [3, 6, 9, 12, 15, 18, 21, 24]

const myEvery = function(Three, cb)
{
  let num = 0;
  for(let i = 0; i < Three.length; i++)
  {
    if(Three[i] % 3 == 0)
    {
      num++
    }
  }

  if(num == 8)
  {
    cb(true)
  }

}

function CallBackFive(item)
{
  console.log(item)
}

myEvery(ListOfTimesThree, CallBackFive) 

// reduce

let AddList = [1, 2, 3, 4, 5, 6]

const myReduce = function(Add, cb)
{
  let sum = 0
  for(let i = 0; i < Add.length; i++)
  {
    sum += Add[i];
  }

  cb(sum)
}

function CallBackSix(item)
{
  console.log(item)
}

myReduce(AddList, CallBackSix) 

//includes()

let ListOfGenre = ['drama', 'romance', 'comedy', 'horror', 'adventure', 'action', 'sliceoflife']

const myIncludes = function(Genre, cb)
{
  for(let i = 0; i < Genre.length; i++)
  {
    if(Genre[i] == 'horror')
    {
      cb(true)
    }
  }
}

function CallBackSeven(item)
{
  console.log(item)
}

myIncludes(ListOfGenre, CallBackSeven)

//indexOf()

let ListOfAnimals = ['whale', 'lion', 'cheetah', 'cat', 'bird', 'tiger']

const myIndexOf = function(Animals, cb)
{
  let num = 0;
  let i
  for( i = 0; i < Animals.length; i=i+2)
  {
    if(Animals[i] == 'bird')
    {
      cb(i)
    }
  }

}

function CallBackEight(item)
{
  console.log(item)
}

myIndexOf(ListOfAnimals, CallBackEight)

//push()

let ListOfSports = ['baseball', 'football', 'tennis', 'badminton', 'swimming', 'soccer']

const myPush = function(Sports, cb)
{
  for(let i = 0; i < Sports.length; i++)
  {
    if(cb)
    {
      Sports[7] = 'basketball'
      
    }
    cb(Sports[i])
  }

}

function CallBackNine(item)
{
  console.log(item)
}

myPush(ListOfSports, CallBackNine) 



let ListOfAnimals2 = ['whale', 'lion', 'cheetah', 'cat', 'bird', 'tiger']

const myUnshift = function(Animals, cb)
{
  let num = 0;
  let i
  for( i = 0; i < Animals.length; i=i+2)
  {
    if(Animals[i] == 'tiger')
    {
      cb(i)
    }
  }

}

function CallBackTen(item)
{
  console.log(item)
}

myUnshift(ListOfAnimals2, CallBackTen) 

let object = {a: "something", b: "45", c:"web"};

const grabKeys = function(Object, cb)
{
  for(let something in object)
  {
    cb(something)
  }
}

function CallBackEleven(item)
{
  console.log(item)
}

 grabKeys(object, CallBackEleven) 

let objecttwo = {a: "something", b: "45", c:"web"};

const grabValues = function(Object, cb)
{
  for(let something in objecttwo)
  {
    cb(objecttwo[something])
  }
}

function CallBackTwelve(item)
{
  console.log(item)
}

grabValues(objecttwo, CallBackTwelve) 



// Miscellaneous Problem (1)

let Zero = [0, 50, 0 , 23, 0, 34, 45, 67]

function moveZeros (nums)
{
  let count = 0
  for(let i = 0; i < nums.length; i++)
  {
    if(nums[i] != 0)
    {
      nums[count++] = nums[i]
    }
  }

  while(count < nums.length)
  {
    nums[count++] = 0;
  }
}  