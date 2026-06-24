// ===== BUGS (Reliability Issues) =====

// S2259: Null dereference - BUG
function getUserName(user) {
  return user.profile.name; // user can be null
}

// S2583: Always-false condition - BUG
function checkAge(age) {
  if (age > 0 && age < 0) { // impossible condition - always false
    return "valid";
  }
  return "invalid";
}

// S905: No side effect - BUG
function computeTotal(a, b) {
  a + b; // result is computed but never used
  return 0;
}

// S1116: Empty statement - BUG
function processData(data) {
  if (!data); // semicolon makes this always pass
  return data;
}


// ===== CODE SMELLS (Maintainability Issues) =====

// S1481: Unused local variable - CODE SMELL
function calculate(x, y) {
  var unusedVar = 42;
  var anotherUnused = "hello";
  return x + y;
}

// S3776: Cognitive Complexity too high - CODE SMELL
function complexLogic(a, b, c, d, e) {
  if (a) {
    if (b) {
      if (c) {
        if (d) {
          if (e) {
            for (let i = 0; i < 10; i++) {
              if (i % 2 === 0) {
                if (a && b) {
                  if (c || d) {
                    return true;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return false;
}

// S1172: Unused function parameters - CODE SMELL
function greet(name, age, address, phone, email) {
  return "Hello " + name;
}

// S108: Empty block - CODE SMELL
function emptyBlock(val) {
  try {
    JSON.parse(val);
  } catch (e) {
    // swallowed exception - empty catch block
  }
}

// S1125: Redundant boolean literal - CODE SMELL
function isValid(flag) {
  if (flag === true) {
    return true;
  } else {
    return false;
  }
}

// S3504: Variables should not be declared using var - CODE SMELL
var globalCounter = 0;
var legacyConfig = { debug: true, version: "1.0" };

module.exports = { getUserName, checkAge, computeTotal, calculate, complexLogic, greet, isValid };
