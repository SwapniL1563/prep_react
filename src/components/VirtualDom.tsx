// what is virtual dom?

// virtual dom is lightwt, in - memory copy of real dom react uses to effectively update the real dom when data or state changes
// instead of touching the actual dom  directly, react uses vdom to update only necessary changes in memory first and then update the real dom using diffing algo

// whenever a state change, react compares old vdpm with new vdom and calculates the part that change using diffing algo and updates it in real dom instead of re-render the whole dom 

// problem solved -> reducing numb of real dom manipulation ( slow and costly operation )
// as before react dom manipulation was hard - each change repaint and reflow the entire page

// vdom  is represented as tree of js objects, each represent an elements
// {
//   type: 'h1',
//   props: { children: 'Hello' }
// }


/// What is reconciliation ?
// it is process that react uses to effectively update dom when state or prop change
// it compares old vdom with new vdom using diff algo
// it consist of 2 assumption
// 1) element of diff type -> replace entire subtree -> eg. div and span 
// 2) elemnt of same type -> comp attribute and children -> keep same node but update that
// react uses key to match old and new list
// after calculating minimal set of changes this chnges are applied to real dom

// repaint vs reflow
// repaint occurs when visual property of an elem changes but layout remain same and browser redrawa the elem  that have change
// eg. color,bg,visbilty
// affects only visual pixels
// repaint doesn't trigger reflow
// less exp than reflow 

// reflow occurs when layout-related properties change, causing browser to recalculate position and size of elem
// eg. position,width
// affects entire layout tree 
// more expensive 