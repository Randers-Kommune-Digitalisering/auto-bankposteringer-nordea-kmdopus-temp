const Node = {
  "id": "613895156063d86a",
  "type": "change",
  "z": "31641b084096a0df",
  "name": "Set params for List Transactions",
  "rules": [
    {
      "t": "set",
      "p": "method",
      "pt": "flow",
      "to": "GET",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "path",
      "pt": "flow",
      "to": "/corporate/premium/v4/accounts",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "path_suffix",
      "pt": "flow",
      "to": "/transactions",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "query_param",
      "pt": "flow",
      "to": "DK5036579260-USD",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "query_param1",
      "pt": "flow",
      "to": "2021-11-14",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "query_param2",
      "pt": "flow",
      "to": "2021-11-14",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "step",
      "pt": "global",
      "to": "5",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 570,
  "y": 700,
  "wires": [
    [
      "caa757059cda7d90"
    ]
  ],
  "_order": 70
}

module.exports = Node;