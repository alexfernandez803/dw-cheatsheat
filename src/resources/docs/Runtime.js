const Runtime = [
  {
    "Name": "fail",
    "Description": "Throws an exception with the specified message."
  },
  {
    "Name": "failIf",
    "Description": "Produces an error with the specified message if the expression in\nthe evaluator returns true, otherwise returns the value."
  },
  {
    "Name": "locationString",
    "Description": "Returns the location string of a given value."
  },
  {
    "Name": "orElse",
    "Description": "Returns the result of the orElse if the previous try result failed if not returns the result of the previous"
  },
  {
    "Name": "orElseTry",
    "Description": "Function to be use with try in order to chain multiple try"
  },
  {
    "Name": "prop",
    "Description": "Returns the value of the property with the specified name or null if the"
  },
  {
    "Name": "property is not defined.",
    "Description": ""
  },
  {
    "Name": "props",
    "Description": "Returns all the properties configured for Mule runtime."
  },
  {
    "Name": "try",
    "Description": "Evaluates the delegate function and returns an object with success: true and result if the delegate function succeeds, or an object with success: false and error if the delegate function throws an exception."
  },
  {
    "Name": "wait",
    "Description": "Stops the execution for the specified timeout (in milliseconds)."
  }
 ]
 export default Runtime