// Survey data hardcoded for all age groups
var surveyData = {
    // Age Group: 18-23 years
    "18-23": [
    {"question":1,"responses":{"i":20,"ii":25,"iii":30,"iv":15,"v":10}},
    {"question":2,"responses":{"i":31,"ii":28,"iii":24,"iv":11,"v":6}},
    {"question":3,"responses":{"i":8,"ii":10,"iii":56,"iv":21,"v":5}},
    {"question":4,"responses":{"i":100,"ii":0,"iii":0,"iv":0,"v":0}},
    {"question":5,"responses":{"i":27,"ii":34,"iii":22,"iv":14,"v":3}},
    {"question":6,"responses":{"i":7,"ii":43,"iii":41,"iv":7,"v":2}},
    {"question":7,"responses":{"i":48,"ii":22,"iii":21,"iv":7,"v":2}},
    {"question":8,"responses":{"i":27,"ii":28,"iii":21,"iv":18,"v":6}},
    {"question":9,"responses":{"i":42,"ii":16,"iii":17,"iv":20,"v":5}},
    {"question":10,"responses":{"i":72,"ii":5,"iii":7,"iv":0,"v":16}},
    {"question":11,"responses":{"i":21,"ii":15,"iii":42,"iv":11,"v":11}},
    {"question":12,"responses":{"i":52,"ii":12,"iii":14,"iv":18,"v":4}},
    {"question":13,"responses":{"i":41,"ii":46,"iii":11,"iv":2,"v":0}},
    {"question":14,"responses":{"i":14,"ii":43,"iii":29,"iv":13,"v":1}},
    {"question":15,"responses":{"i":61,"ii":19,"iii":0,"iv":15,"v":5}},
    {"question":16,"responses":{"i":42,"ii":41,"iii":6,"iv":11,"v":0}},
    {"question":17,"responses":{"i":21,"ii":23,"iii":21,"iv":30,"v":5}},
    {"question":18,"responses":{"i":76,"ii":10,"iii":10,"iv":4,"v":0}},
    {"question":19,"responses":{"i":31,"ii":34,"iii":7,"iv":28,"v":0}},
    {"question":20,"responses":{"i":15,"ii":65,"iii":9,"iv":11,"v":0}},
    {"question":21,"responses":{"i":44,"ii":41,"iii":8,"iv":7,"v":0}},
    {"question":22,"responses":{"i":34,"ii":45,"iii":20,"iv":0,"v":1}},
    {"question":23,"responses":{"i":7,"ii":7,"iii":78,"iv":8,"v":0}},
    {"question":24,"responses":{"i":76,"ii":5,"iii":7,"iv":8,"v":4}},
    {"question":25,"responses":{"i":21,"ii":19,"iii":0,"iv":45,"v":15}},
    {"question":26,"responses":{"i":19,"ii":11,"iii":21,"iv":49,"v":0}},
    {"question":27,"responses":{"i":52,"ii":21,"iii":9,"iv":18,"v":0}},
    {"question":28,"responses":{"i":12,"ii":15,"iii":12,"iv":48,"v":13}},
    {"question":29,"responses":{"i":48,"ii":21,"iii":17,"iv":11,"v":3}},
    {"question":30,"responses":{"i":37,"ii":17,"iii":27,"iv":11,"v":8}},
    {"question":31,"responses":{"i":56,"ii":17,"iii":7,"iv":12,"v":8}},
    {"question":32,"responses":{"i":18,"ii":11,"iii":41,"iv":21,"v":9}},
    {"question":33,"responses":{"i":21,"ii":16,"iii":23,"iv":38,"v":2}},
    {"question":34,"responses":{"i":27,"ii":18,"iii":26,"iv":31,"v":8}},
    {"question":35,"responses":{"i":21,"ii":23,"iii":23,"iv":31,"v":2}},
    {"question":36,"responses":{"i":2,"ii":32,"iii":35,"iv":23,"v":8}},
    {"question":37,"responses":{"i":31,"ii":31,"iii":5,"iv":30,"v":3}},
    {"question":38,"responses":{"i":17,"ii":11,"iii":7,"iv":63,"v":2}},
    {"question":39,"responses":{"i":71,"ii":10,"iii":8,"iv":7,"v":4}},
    {"question":40,"responses":{"i":17,"ii":33,"iii":31,"iv":17,"v":2}},
    {"question":41,"responses":{"i":23,"ii":52,"iii":11,"iv":13,"v":1}},
    {"question":42,"responses":{"i":54,"ii":11,"iii":18,"iv":17,"v":0}},
    {"question":43,"responses":{"i":11,"ii":36,"iii":31,"iv":22,"v":0}},
    {"question":44,"responses":{"i":31,"ii":22,"iii":21,"iv":24,"v":2}},
    {"question":45,"responses":{"i":32,"ii":11,"iii":35,"iv":13,"v":9}},
    {"question":46,"responses":{"i":12,"ii":23,"iii":15,"iv":47,"v":3}},
    {"question":47,"responses":{"i":31,"ii":26,"iii":31,"iv":12,"v":0}},
    {"question":48,"responses":{"i":41,"ii":26,"iii":21,"iv":12,"v":0}},
    {"question":49,"responses":{"i":21,"ii":43,"iii":13,"iv":21,"v":2}},
    {"question":50,"responses":{"i":11,"ii":17,"iii":21,"iv":51,"v":0}},
    {"question":51,"responses":{"i":32,"ii":38,"iii":21,"iv":9,"v":0}},
    {"question":52,"responses":{"i":13,"ii":10,"iii":47,"iv":21,"v":9}},
    {"question":53,"responses":{"i":9,"ii":11,"iii":41,"iv":20,"v":9}},
    {"question":54,"responses":{"i":15,"ii":31,"iii":29,"iv":21,"v":4}},
    {"question":55,"responses":{"i":31,"ii":21,"iii":27,"iv":17,"v":4}},
    {"question":56,"responses":{"i":51,"ii":11,"iii":26,"iv":10,"v":2}},
    {"question":57,"responses":{"i":47,"ii":21,"iii":18,"iv":12,"v":2}},
    {"question":58,"responses":{"i":39,"ii":31,"iii":11,"iv":17,"v":2}},
    {"question":59,"responses":{"i":14,"ii":21,"iii":11,"iv":41,"v":13}},
    {"question":60,"responses":{"i":14,"ii":11,"iii":15,"iv":22,"v":38}},
    {"question":61,"responses":{"i":18,"ii":17,"iii":13,"iv":47,"v":5}},
    {"question":62,"responses":{"i":11,"ii":31,"iii":20,"iv":21,"v":17}},
    {"question":63,"responses":{"i":21,"ii":27,"iii":17,"iv":14,"v":21}},
    {"question":64,"responses":{"i":57,"ii":13,"iii":17,"iv":11,"v":2}},
    {"question":65,"responses":{"i":67,"ii":17,"iii":5,"iv":11,"v":0}},
    {"question":66,"responses":{"i":40,"ii":11,"iii":7,"iv":37,"v":5}},
    {"question":67,"responses":{"i":21,"ii":27,"iii":17,"iv":21,"v":14}},
    {"question":68,"responses":{"i":21,"ii":18,"iii":11,"iv":47,"v":3}},
    {"question":69,"responses":{"i":21,"ii":12,"iii":31,"iv":23,"v":13}},
    {"question":70,"responses":{"i":11,"ii":11,"iii":37,"iv":41,"v":0}},
    {"question":71,"responses":{"i":22,"ii":21,"iii":47,"iv":0,"v":10}},
    {"question":72,"responses":{"i":13,"ii":11,"iii":33,"iv":37,"v":6}},
    {"question":73,"responses":{"i":27,"ii":47,"iii":3,"iv":21,"v":2}},
    {"question":74,"responses":{"i":7,"ii":17,"iii":67,"iv":5,"v":4}},
    {"question":75,"responses":{"i":31,"ii":14,"iii":21,"iv":33,"v":1}},
    {"question":76,"responses":{"i":16,"ii":31,"iii":27,"iv":19,"v":7}},
    {"question":77,"responses":{"i":11,"ii":18,"iii":34,"iv":31,"v":6}},
    {"question":78,"responses":{"i":21,"ii":41,"iii":17,"iv":11,"v":10}},
    {"question":79,"responses":{"i":11,"ii":47,"iii":21,"iv":12,"v":9}},
    {"question":80,"responses":{"i":12,"ii":11,"iii":51,"iv":20,"v":6}},
    {"question":81,"responses":{"i":21,"ii":7,"iii":46,"iv":23,"v":3}},
    {"question":82,"responses":{"i":61,"ii":11,"iii":9,"iv":17,"v":2}},
    {"question":83,"responses":{"i":31,"ii":25,"iii":17,"iv":24,"v":3}},
    {"question":84,"responses":{"i":41,"ii":21,"iii":6,"iv":29,"v":3}},
    {"question":85,"responses":{"i":53,"ii":17,"iii":11,"iv":12,"v":7}},
    {"question":86,"responses":{"i":31,"ii":21,"iii":27,"iv":16,"v":5}},
    {"question":87,"responses":{"i":24,"ii":21,"iii":24,"iv":16,"v":5}},
    {"question":88,"responses":{"i":21,"ii":23,"iii":28,"iv":21,"v":7}},
    {"question":89,"responses":{"i":11,"ii":17,"iii":39,"iv":21,"v":12}},
    {"question":90,"responses":{"i":4,"ii":51,"iii":21,"iv":13,"v":11}},
    {"question":91,"responses":{"i":31,"ii":19,"iii":21,"iv":20,"v":9}},
    {"question":92,"responses":{"i":53,"ii":5,"iii":12,"iv":7,"v":23}},
    {"question":93,"responses":{"i":0,"ii":47,"iii":27,"iv":21,"v":5}},
    {"question":94,"responses":{"i":41,"ii":13,"iii":21,"iv":21,"v":6}},
    {"question":95,"responses":{"i":51,"ii":13,"iii":15,"iv":11,"v":9}},
    {"question":96,"responses":{"i":21,"ii":11,"iii":15,"iv":41,"v":12}},
    {"question":97,"responses":{"i":41,"ii":21,"iii":23,"iv":10,"v":5}},
    {"question":98,"responses":{"i":31,"ii":11,"iii":41,"iv":17,"v":0}},
    {"question":99,"responses":{"i":21,"ii":22,"iii":23,"iv":21,"v":13}},
    {"question":100,"responses":{"i":21,"ii":2,"iii":42,"iv":31,"v":4}}
],
    // Age Group: 24-29 years (using Table-age-grp-2-without data)
    "24-29": [
        {"question": 1, "responses": {"i": 5, "ii": 1, "iii": 3, "iv": 1, "v": 2}},
        {"question": 2, "responses": {"i": 3, "ii": 2, "iii": 3, "iv": 3, "v": 2}},
        {"question": 3, "responses": {"i": 1, "ii": 4, "iii": 5, "iv": 0, "v": 2}},
        {"question": 4, "responses": {"i": 9, "ii": 0, "iii": 0, "iv": 1, "v": 3}},
        {"question": 5, "responses": {"i": 3, "ii": 4, "iii": 0, "iv": 6, "v": 0}},
        {"question": 6, "responses": {"i": 6, "ii": 3, "iii": 2, "iv": 1, "v": 1}},
        {"question": 7, "responses": {"i": 6, "ii": 1, "iii": 0, "iv": 0, "v": 6}},
        {"question": 8, "responses": {"i": 0, "ii": 1, "iii": 0, "iv": 0, "v": 12}},
        {"question": 9, "responses": {"i": 4, "ii": 2, "iii": 2, "iv": 4, "v": 1}},
        {"question": 10, "responses": {"i": 8, "ii": 2, "iii": 3, "iv": 0, "v": 0}},
        {"question": 11, "responses": {"i": 2, "ii": 3, "iii": 3, "iv": 4, "v": 0}},
        {"question": 12, "responses": {"i": 0, "ii": 2, "iii": 6, "iv": 5, "v": 0}},
        {"question": 13, "responses": {"i": 1, "ii": 4, "iii": 3, "iv": 7, "v": 0}},
        {"question": 14, "responses": {"i": 3, "ii": 2, "iii": 5, "iv": 3, "v": 2}},
        {"question": 15, "responses": {"i": 3, "ii": 5, "iii": 1, "iv": 2, "v": 3}},
        {"question": 16, "responses": {"i": 3, "ii": 1, "iii": 5, "iv": 2, "v": 3}},
        {"question": 17, "responses": {"i": 1, "ii": 5, "iii": 1, "iv": 3, "v": 3}},
        {"question": 18, "responses": {"i": 10, "ii": 3, "iii": 1, "iv": 1, "v": 2}},
        {"question": 19, "responses": {"i": 3, "ii": 6, "iii": 2, "iv": 1, "v": 1}},
        {"question": 20, "responses": {"i": 2, "ii": 6, "iii": 2, "iv": 1, "v": 2}},
        {"question": 21, "responses": {"i": 2, "ii": 7, "iii": 4, "iv": 5, "v": 1}},
        {"question": 22, "responses": {"i": 4, "ii": 2, "iii": 4, "iv": 2, "v": 2}},
        {"question": 23, "responses": {"i": 3, "ii": 5, "iii": 3, "iv": 2, "v": 4}},
        {"question": 24, "responses": {"i": 6, "ii": 1, "iii": 3, "iv": 2, "v": 1}},
        {"question": 25, "responses": {"i": 7, "ii": 2, "iii": 1, "iv": 2, "v": 1}},
        {"question": 26, "responses": {"i": 1, "ii": 6, "iii": 0, "iv": 4, "v": 2}},
        {"question": 27, "responses": {"i": 5, "ii": 0, "iii": 5, "iv": 0, "v": 1}},
        {"question": 28, "responses": {"i": 1, "ii": 2, "iii": 3, "iv": 2, "v": 3}},
        {"question": 29, "responses": {"i": 3, "ii": 2, "iii": 3, "iv": 2, "v": 1}},
        {"question": 30, "responses": {"i": 3, "ii": 0, "iii": 6, "iv": 3, "v": 1}},
        {"question": 31, "responses": {"i": 2, "ii": 3, "iii": 4, "iv": 3, "v": 1}},
        {"question": 32, "responses": {"i": 1, "ii": 2, "iii": 2, "iv": 2, "v": 6}},
        {"question": 33, "responses": {"i": 6, "ii": 5, "iii": 1, "iv": 0, "v": 1}},
        {"question": 34, "responses": {"i": 10, "ii": 3, "iii": 2, "iv": 2, "v": 1}},
        {"question": 35, "responses": {"i": 2, "ii": 7, "iii": 2, "iv": 2, "v": 2}},
        {"question": 36, "responses": {"i": 2, "ii": 3, "iii": 9, "iv": 3, "v": 2}},
        {"question": 37, "responses": {"i": 2, "ii": 5, "iii": 2, "iv": 9, "v": 1}},
        {"question": 38, "responses": {"i": 4, "ii": 1, "iii": 3, "iv": 5, "v": 7}},
        {"question": 39, "responses": {"i": 3, "ii": 2, "iii": 3, "iv": 2, "v": 3}},
        {"question": 40, "responses": {"i": 5, "ii": 2, "iii": 5, "iv": 0, "v": 2}},
        {"question": 41, "responses": {"i": 6, "ii": 3, "iii": 2, "iv": 2, "v": 3}},
        {"question": 42, "responses": {"i": 4, "ii": 1, "iii": 4, "iv": 3, "v": 1}},
        {"question": 43, "responses": {"i": 2, "ii": 5, "iii": 4, "iv": 6, "v": 1}},
        {"question": 44, "responses": {"i": 1, "ii": 3, "iii": 5, "iv": 2, "v": 3}},
        {"question": 45, "responses": {"i": 4, "ii": 1, "iii": 1, "iv": 4, "v": 2}},
        {"question": 46, "responses": {"i": 4, "ii": 2, "iii": 3, "iv": 5, "v": 3}},
        {"question": 47, "responses": {"i": 3, "ii": 7, "iii": 5, "iv": 2, "v": 2}},
        {"question": 48, "responses": {"i": 6, "ii": 1, "iii": 5, "iv": 2, "v": 1}},
        {"question": 49, "responses": {"i": 2, "ii": 4, "iii": 5, "iv": 4, "v": 1}},
        {"question": 50, "responses": {"i": 7, "ii": 3, "iii": 4, "iv": 1, "v": 2}},
        {"question": 51, "responses": {"i": 4, "ii": 6, "iii": 3, "iv": 1, "v": 2}},
        {"question": 52, "responses": {"i": 2, "ii": 2, "iii": 8, "iv": 4, "v": 2}},
        {"question": 53, "responses": {"i": 0, "ii": 5, "iii": 0, "iv": 3, "v": 5}},
        {"question": 54, "responses": {"i": 1, "ii": 4, "iii": 5, "iv": 0, "v": 3}},
        {"question": 55, "responses": {"i": 1, "ii": 2, "iii": 5, "iv": 2, "v": 3}},
        {"question": 56, "responses": {"i": 6, "ii": 4, "iii": 3, "iv": 1, "v": 2}},
        {"question": 57, "responses": {"i": 6, "ii": 1, "iii": 2, "iv": 1, "v": 3}},
        {"question": 58, "responses": {"i": 5, "ii": 5, "iii": 3, "iv": 3, "v": 2}},
        {"question": 59, "responses": {"i": 2, "ii": 3, "iii": 3, "iv": 3, "v": 2}},
        {"question": 60, "responses": {"i": 2, "ii": 2, "iii": 1, "iv": 4, "v": 4}},
        {"question": 61, "responses": {"i": 1, "ii": 1, "iii": 3, "iv": 5, "v": 3}},
        {"question": 62, "responses": {"i": 2, "ii": 5, "iii": 1, "iv": 2, "v": 5}},
        {"question": 63, "responses": {"i": 3, "ii": 3, "iii": 7, "iv": 2, "v": 3}},
        {"question": 64, "responses": {"i": 5, "ii": 4, "iii": 3, "iv": 1, "v": 3}},
        {"question": 65, "responses": {"i": 6, "ii": 3, "iii": 3, "iv": 6, "v": 3}},
        {"question": 66, "responses": {"i": 6, "ii": 5, "iii": 1, "iv": 1, "v": 1}},
        {"question": 67, "responses": {"i": 6, "ii": 4, "iii": 5, "iv": 3, "v": 2}},
        {"question": 68, "responses": {"i": 5, "ii": 2, "iii": 5, "iv": 4, "v": 3}},
        {"question": 69, "responses": {"i": 5, "ii": 3, "iii": 2, "iv": 5, "v": 2}},
        {"question": 70, "responses": {"i": 3, "ii": 5, "iii": 3, "iv": 4, "v": 2}},
        {"question": 71, "responses": {"i": 5, "ii": 5, "iii": 3, "iv": 4, "v": 2}},
        {"question": 72, "responses": {"i": 5, "ii": 5, "iii": 5, "iv": 3, "v": 2}},
        {"question": 73, "responses": {"i": 6, "ii": 5, "iii": 2, "iv": 3, "v": 3}},
        {"question": 74, "responses": {"i": 5, "ii": 5, "iii": 2, "iv": 3, "v": 3}},
        {"question": 75, "responses": {"i": 4, "ii": 5, "iii": 5, "iv": 3, "v": 2}},
        {"question": 76, "responses": {"i": 1, "ii": 3, "iii": 5, "iv": 5, "v": 2}},
        {"question": 77, "responses": {"i": 1, "ii": 3, "iii": 2, "iv": 5, "v": 3}},
        {"question": 78, "responses": {"i": 1, "ii": 5, "iii": 2, "iv": 1, "v": 4}},
        {"question": 79, "responses": {"i": 0, "ii": 6, "iii": 0, "iv": 2, "v": 5}},
        {"question": 80, "responses": {"i": 3, "ii": 3, "iii": 3, "iv": 1, "v": 2}},
        {"question": 81, "responses": {"i": 2, "ii": 7, "iii": 1, "iv": 3, "v": 3}},
        {"question": 82, "responses": {"i": 5, "ii": 5, "iii": 2, "iv": 2, "v": 2}},
        {"question": 83, "responses": {"i": 5, "ii": 6, "iii": 2, "iv": 4, "v": 2}},
        {"question": 84, "responses": {"i": 5, "ii": 4, "iii": 2, "iv": 2, "v": 2}},
        {"question": 85, "responses": {"i": 4, "ii": 5, "iii": 2, "iv": 5, "v": 2}},
        {"question": 86, "responses": {"i": 1, "ii": 2, "iii": 7, "iv": 4, "v": 1}},
        {"question": 87, "responses": {"i": 2, "ii": 2, "iii": 5, "iv": 5, "v": 2}},
        {"question": 88, "responses": {"i": 5, "ii": 3, "iii": 4, "iv": 3, "v": 2}},
        {"question": 89, "responses": {"i": 4, "ii": 3, "iii": 9, "iv": 2, "v": 1}},
        {"question": 90, "responses": {"i": 8, "ii": 3, "iii": 2, "iv": 1, "v": 3}},
        {"question": 91, "responses": {"i": 3, "ii": 6, "iii": 2, "iv": 2, "v": 1}},
        {"question": 92, "responses": {"i": 4, "ii": 2, "iii": 10, "iv": 3, "v": 3}},
        {"question": 93, "responses": {"i": 4, "ii": 2, "iii": 5, "iv": 6, "v": 2}},
        {"question": 94, "responses": {"i": 3, "ii": 4, "iii": 4, "iv": 5, "v": 4}},
        {"question": 95, "responses": {"i": 5, "ii": 3, "iii": 4, "iv": 6, "v": 3}},
        {"question": 96, "responses": {"i": 3, "ii": 5, "iii": 6, "iv": 2, "v": 6}},
        {"question": 97, "responses": {"i": 3, "ii": 5, "iii": 6, "iv": 3, "v": 3}},
        {"question": 98, "responses": {"i": 5, "ii": 3, "iii": 3, "iv": 5, "v": 3}},
        {"question": 99, "responses": {"i": 6, "ii": 5, "iii": 3, "iv": 4, "v": 2}},
        {"question": 100, "responses": {"i": 8, "ii": 3, "iii": 6, "iv": 3, "v": 2}}
    ],
    // Age Group: 30-35 years (using Group-3 data)
    "30-35": [
        {"question": 1, "responses": {"i": 35, "ii": 30, "iii": 20, "iv": 10, "v": 5}},
        {"question": 2, "responses": {"i": 35, "ii": 10, "iii": 20, "iv": 32, "v": 3}},
        {"question": 3, "responses": {"i": 20, "ii": 40, "iii": 15, "iv": 10, "v": 2}},
        {"question": 4, "responses": {"i": 25, "ii": 40, "iii": 23, "iv": 10, "v": 2}},
        {"question": 5, "responses": {"i": 15, "ii": 25, "iii": 15, "iv": 40, "v": 5}},
        {"question": 6, "responses": {"i": 20, "ii": 40, "iii": 17, "iv": 20, "v": 3}},
        {"question": 7, "responses": {"i": 35, "ii": 25, "iii": 20, "iv": 15, "v": 5}},
        {"question": 8, "responses": {"i": 25, "ii": 20, "iii": 15, "iv": 30, "v": 10}},
        {"question": 9, "responses": {"i": 35, "ii": 25, "iii": 20, "iv": 12, "v": 8}},
        {"question": 10, "responses": {"i": 35, "ii": 22, "iii": 30, "iv": 10, "v": 8}},
        {"question": 11, "responses": {"i": 25, "ii": 30, "iii": 20, "iv": 15, "v": 10}},
        {"question": 12, "responses": {"i": 35, "ii": 25, "iii": 20, "iv": 16, "v": 4}},
        {"question": 13, "responses": {"i": 25, "ii": 30, "iii": 15, "iv": 24, "v": 6}},
        {"question": 14, "responses": {"i": 20, "ii": 30, "iii": 25, "iv": 20, "v": 5}},
        {"question": 15, "responses": {"i": 35, "ii": 25, "iii": 15, "iv": 20, "v": 5}},
        {"question": 16, "responses": {"i": 20, "ii": 30, "iii": 15, "iv": 30, "v": 5}},
        {"question": 17, "responses": {"i": 15, "ii": 20, "iii": 15, "iv": 35, "v": 15}},
        {"question": 18, "responses": {"i": 45, "ii": 25, "iii": 20, "iv": 5, "v": 5}},
        {"question": 19, "responses": {"i": 25, "ii": 30, "iii": 15, "iv": 20, "v": 10}},
        {"question": 20, "responses": {"i": 35, "ii": 25, "iii": 20, "iv": 15, "v": 5}},
        {"question": 21, "responses": {"i": 30, "ii": 25, "iii": 20, "iv": 20, "v": 5}},
        {"question": 22, "responses": {"i": 35, "ii": 20, "iii": 25, "iv": 12, "v": 8}},
        {"question": 23, "responses": {"i": 25, "ii": 30, "iii": 20, "iv": 20, "v": 5}},
        {"question": 24, "responses": {"i": 30, "ii": 25, "iii": 20, "iv": 17, "v": 8}},
        {"question": 25, "responses": {"i": 30, "ii": 25, "iii": 20, "iv": 20, "v": 5}},
        {"question": 26, "responses": {"i": 25, "ii": 20, "iii": 25, "iv": 30, "v": 5}},
        {"question": 27, "responses": {"i": 30, "ii": 25, "iii": 15, "iv": 20, "v": 10}},
        {"question": 28, "responses": {"i": 15, "ii": 25, "iii": 20, "iv": 30, "v": 10}},
        {"question": 29, "responses": {"i": 30, "ii": 25, "iii": 20, "iv": 15, "v": 10}},
        {"question": 30, "responses": {"i": 25, "ii": 20, "iii": 25, "iv": 20, "v": 10}},
        {"question": 31, "responses": {"i": 30, "ii": 25, "iii": 20, "iv": 18, "v": 7}},
        {"question": 32, "responses": {"i": 20, "ii": 15, "iii": 30, "iv": 25, "v": 10}},
        {"question": 33, "responses": {"i": 30, "ii": 25, "iii": 20, "iv": 15, "v": 10}},
        {"question": 34, "responses": {"i": 35, "ii": 25, "iii": 15, "iv": 10, "v": 15}},
        {"question": 35, "responses": {"i": 35, "ii": 30, "iii": 20, "iv": 10, "v": 5}},
        {"question": 36, "responses": {"i": 25, "ii": 30, "iii": 20, "iv": 15, "v": 10}},
        {"question": 37, "responses": {"i": 30, "ii": 15, "iii": 25, "iv": 20, "v": 10}},
        {"question": 38, "responses": {"i": 30, "ii": 25, "iii": 15, "iv": 10, "v": 20}},
        {"question": 39, "responses": {"i": 25, "ii": 20, "iii": 30, "iv": 15, "v": 10}},
        {"question": 40, "responses": {"i": 25, "ii": 30, "iii": 25, "iv": 10, "v": 10}},
        {"question": 41, "responses": {"i": 30, "ii": 25, "iii": 20, "iv": 15, "v": 10}},
        {"question": 42, "responses": {"i": 40, "ii": 20, "iii": 15, "iv": 12, "v": 13}},
        {"question": 43, "responses": {"i": 30, "ii": 35, "iii": 20, "iv": 10, "v": 5}},
        {"question": 44, "responses": {"i": 30, "ii": 25, "iii": 20, "iv": 15, "v": 10}},
        {"question": 45, "responses": {"i": 30, "ii": 20, "iii": 25, "iv": 18, "v": 7}},
        {"question": 46, "responses": {"i": 30, "ii": 25, "iii": 20, "iv": 15, "v": 10}},
        {"question": 47, "responses": {"i": 35, "ii": 30, "iii": 20, "iv": 10, "v": 5}},
        {"question": 48, "responses": {"i": 35, "ii": 25, "iii": 20, "iv": 10, "v": 10}},
        {"question": 49, "responses": {"i": 25, "ii": 30, "iii": 20, "iv": 15, "v": 10}},
        {"question": 50, "responses": {"i": 30, "ii": 25, "iii": 20, "iv": 15, "v": 10}},
        {"question": 51, "responses": {"i": 35, "ii": 30, "iii": 25, "iv": 5, "v": 5}},
        {"question": 52, "responses": {"i": 30, "ii": 25, "iii": 20, "iv": 15, "v": 10}},
        {"question": 53, "responses": {"i": 30, "ii": 20, "iii": 25, "iv": 10, "v": 15}},
        {"question": 54, "responses": {"i": 30, "ii": 25, "iii": 20, "iv": 15, "v": 10}},
        {"question": 55, "responses": {"i": 25, "ii": 30, "iii": 20, "iv": 17, "v": 8}},
        {"question": 56, "responses": {"i": 30, "ii": 25, "iii": 25, "iv": 10, "v": 10}},
        {"question": 57, "responses": {"i": 25, "ii": 25, "iii": 20, "iv": 15, "v": 15}},
        {"question": 58, "responses": {"i": 30, "ii": 20, "iii": 15, "iv": 25, "v": 10}},
        {"question": 59, "responses": {"i": 35, "ii": 25, "iii": 20, "iv": 15, "v": 5}},
        {"question": 60, "responses": {"i": 30, "ii": 25, "iii": 20, "iv": 10, "v": 15}},
        {"question": 61, "responses": {"i": 25, "ii": 15, "iii": 10, "iv": 35, "v": 15}},
        {"question": 62, "responses": {"i": 30, "ii": 25, "iii": 20, "iv": 15, "v": 10}},
        {"question": 63, "responses": {"i": 30, "ii": 20, "iii": 25, "iv": 10, "v": 15}},
        {"question": 64, "responses": {"i": 35, "ii": 20, "iii": 25, "iv": 15, "v": 5}},
        {"question": 65, "responses": {"i": 35, "ii": 20, "iii": 15, "iv": 15, "v": 15}},
        {"question": 66, "responses": {"i": 40, "ii": 15, "iii": 20, "iv": 15, "v": 10}},
        {"question": 67, "responses": {"i": 30, "ii": 25, "iii": 20, "iv": 10, "v": 15}},
        {"question": 68, "responses": {"i": 30, "ii": 15, "iii": 15, "iv": 30, "v": 10}},
        {"question": 69, "responses": {"i": 30, "ii": 20, "iii": 15, "iv": 25, "v": 10}},
        {"question": 70, "responses": {"i": 30, "ii": 20, "iii": 20, "iv": 25, "v": 5}},
        {"question": 71, "responses": {"i": 30, "ii": 25, "iii": 20, "iv": 15, "v": 10}},
        {"question": 72, "responses": {"i": 30, "ii": 25, "iii": 20, "iv": 10, "v": 15}},
        {"question": 73, "responses": {"i": 25, "ii": 30, "iii": 20, "iv": 20, "v": 5}},
        {"question": 74, "responses": {"i": 30, "ii": 15, "iii": 25, "iv": 20, "v": 10}},
        {"question": 75, "responses": {"i": 20, "ii": 25, "iii": 15, "iv": 35, "v": 5}},
        {"question": 76, "responses": {"i": 30, "ii": 25, "iii": 20, "iv": 20, "v": 5}},
        {"question": 77, "responses": {"i": 15, "ii": 10, "iii": 35, "iv": 30, "v": 10}},
        {"question": 78, "responses": {"i": 20, "ii": 35, "iii": 25, "iv": 5, "v": 15}},
        {"question": 79, "responses": {"i": 10, "ii": 25, "iii": 30, "iv": 25, "v": 10}},
        {"question": 80, "responses": {"i": 30, "ii": 20, "iii": 25, "iv": 20, "v": 5}},
        {"question": 81, "responses": {"i": 30, "ii": 20, "iii": 25, "iv": 15, "v": 10}},
        {"question": 82, "responses": {"i": 35, "ii": 20, "iii": 25, "iv": 10, "v": 10}},
        {"question": 83, "responses": {"i": 35, "ii": 25, "iii": 15, "iv": 20, "v": 5}},
        {"question": 84, "responses": {"i": 30, "ii": 25, "iii": 20, "iv": 20, "v": 5}},
        {"question": 85, "responses": {"i": 30, "ii": 25, "iii": 20, "iv": 20, "v": 5}},
        {"question": 86, "responses": {"i": 35, "ii": 25, "iii": 20, "iv": 10, "v": 10}},
        {"question": 87, "responses": {"i": 30, "ii": 25, "iii": 15, "iv": 25, "v": 5}},
        {"question": 88, "responses": {"i": 30, "ii": 20, "iii": 20, "iv": 20, "v": 10}},
        {"question": 89, "responses": {"i": 30, "ii": 25, "iii": 25, "iv": 15, "v": 5}},
        {"question": 90, "responses": {"i": 25, "ii": 30, "iii": 25, "iv": 15, "v": 5}},
        {"question": 91, "responses": {"i": 30, "ii": 20, "iii": 25, "iv": 20, "v": 5}},
        {"question": 92, "responses": {"i": 25, "ii": 20, "iii": 25, "iv": 15, "v": 15}},
        {"question": 93, "responses": {"i": 20, "ii": 25, "iii": 20, "iv": 20, "v": 15}},
        {"question": 94, "responses": {"i": 25, "ii": 20, "iii": 20, "iv": 20, "v": 15}},
        {"question": 95, "responses": {"i": 25, "ii": 25, "iii": 20, "iv": 15, "v": 15}},
        {"question": 96, "responses": {"i": 35, "ii": 25, "iii": 20, "iv": 10, "v": 10}},
        {"question": 97, "responses": {"i": 35, "ii": 30, "iii": 25, "iv": 5, "v": 5}},
        {"question": 98, "responses": {"i": 25, "ii": 25, "iii": 30, "iv": 15, "v": 5}},
        {"question": 99, "responses": {"i": 25, "ii": 20, "iii": 25, "iv": 20, "v": 10}},
        {"question": 100, "responses": {"i": 25, "ii": 20, "iii": 25, "iv": 15, "v": 15}}
    ],
    // Age Group: More than 35 years (using Group-4 data - same as Group-3)
    "more-than-35": [
    {"question": 1, "responses": {"i": 42, "ii": 28, "iii": 12, "iv": 13, "v": 5}},
    {"question": 2, "responses": {"i": 33, "ii": 15, "iii": 24, "iv": 22, "v": 6}},
    {"question": 3, "responses": {"i": 18, "ii": 38, "iii": 20, "iv": 16, "v": 8}},
    {"question": 4, "responses": {"i": 22, "ii": 43, "iii": 18, "iv": 12, "v": 5}},
    {"question": 5, "responses": {"i": 12, "ii": 28, "iii": 18, "iv": 37, "v": 5}},
    {"question": 6, "responses": {"i": 18, "ii": 36, "iii": 20, "iv": 21, "v": 5}},
    {"question": 7, "responses": {"i": 32, "ii": 28, "iii": 20, "iv": 14, "v": 6}},
    {"question": 8, "responses": {"i": 23, "ii": 22, "iii": 17, "iv": 28, "v": 10}},
    {"question": 9, "responses": {"i": 32, "ii": 27, "iii": 22, "iv": 13, "v": 6}},
    {"question": 10, "responses": {"i": 32, "ii": 25, "iii": 28, "iv": 10, "v": 5}},
    {"question": 11, "responses": {"i": 23, "ii": 33, "iii": 18, "iv": 17, "v": 9}},
    {"question": 12, "responses": {"i": 32, "ii": 27, "iii": 22, "iv": 14, "v": 5}},
    {"question": 13, "responses": {"i": 23, "ii": 33, "iii": 18, "iv": 20, "v": 6}},
    {"question": 14, "responses": {"i": 18, "ii": 33, "iii": 28, "iv": 16, "v": 5}},
    {"question": 15, "responses": {"i": 33, "ii": 22, "iii": 17, "iv": 21, "v": 7}},
    {"question": 16, "responses": {"i": 18, "ii": 33, "iii": 18, "iv": 28, "v": 6}},
    {"question": 17, "responses": {"i": 13, "ii": 22, "iii": 18, "iv": 37, "v": 10}},
    {"question": 18, "responses": {"i": 42, "ii": 28, "iii": 18, "iv": 7, "v": 5}},
    {"question": 19, "responses": {"i": 22, "ii": 33, "iii": 18, "iv": 20, "v": 7}},
    {"question": 20, "responses": {"i": 32, "ii": 27, "iii": 22, "iv": 14, "v": 5}},
    {"question": 21, "responses": {"i": 30, "ii": 27, "iii": 18, "iv": 20, "v": 5}},
    {"question": 22, "responses": {"i": 33, "ii": 23, "iii": 27, "iv": 10, "v": 7}},
    {"question": 23, "responses": {"i": 23, "ii": 33, "iii": 17, "iv": 22, "v": 5}},
    {"question": 24, "responses": {"i": 27, "ii": 27, "iii": 20, "iv": 18, "v": 8}},
    {"question": 25, "responses": {"i": 27, "ii": 27, "iii": 22, "iv": 18, "v": 6}},
    {"question": 26, "responses": {"i": 23, "ii": 20, "iii": 28, "iv": 27, "v": 7}},
    {"question": 27, "responses": {"i": 27, "ii": 28, "iii": 17, "iv": 18, "v": 10}},
    {"question": 28, "responses": {"i": 13, "ii": 27, "iii": 22, "iv": 28, "v": 10}},
    {"question": 29, "responses": {"i": 27, "ii": 28, "iii": 20, "iv": 15, "v": 10}},
    {"question": 30, "responses": {"i": 23, "ii": 22, "iii": 28, "iv": 18, "v": 9}},
    {"question": 31, "responses": {"i": 28, "ii": 27, "iii": 20, "iv": 18, "v": 7}},
    {"question": 32, "responses": {"i": 17, "ii": 18, "iii": 33, "iv": 22, "v": 10}},
    {"question": 33, "responses": {"i": 28, "ii": 27, "iii": 18, "iv": 20, "v": 7}},
    {"question": 34, "responses": {"i": 32, "ii": 27, "iii": 18, "iv": 13, "v": 10}},
    {"question": 35, "responses": {"i": 32, "ii": 28, "iii": 20, "iv": 12, "v": 8}},
    {"question": 36, "responses": {"i": 27, "ii": 32, "iii": 18, "iv": 15, "v": 8}},
    {"question": 37, "responses": {"i": 28, "ii": 17, "iii": 29, "iv": 18, "v": 8}},
    {"question": 38, "responses": {"i": 28, "ii": 27, "iii": 18, "iv": 13, "v": 14}},
    {"question": 39, "responses": {"i": 22, "ii": 28, "iii": 30, "iv": 15, "v": 5}},
    {"question": 40, "responses": {"i": 22, "ii": 33, "iii": 23, "iv": 12, "v": 10}},
    {"question": 41, "responses": {"i": 27, "ii": 27, "iii": 20, "iv": 18, "v": 8}},
    {"question": 42, "responses": {"i": 38, "ii": 22, "iii": 18, "iv": 12, "v": 10}},
    {"question": 43, "responses": {"i": 27, "ii": 33, "iii": 20, "iv": 12, "v": 8}},
    {"question": 44, "responses": {"i": 28, "ii": 27, "iii": 20, "iv": 15, "v": 10}},
    {"question": 45, "responses": {"i": 27, "ii": 23, "iii": 27, "iv": 16, "v": 7}},
    {"question": 46, "responses": {"i": 28, "ii": 27, "iii": 20, "iv": 15, "v": 10}},
    {"question": 47, "responses": {"i": 32, "ii": 28, "iii": 20, "iv": 12, "v": 8}},
    {"question": 48, "responses": {"i": 33, "ii": 23, "iii": 20, "iv": 12, "v": 12}},
    {"question": 49, "responses": {"i": 23, "ii": 33, "iii": 20, "iv": 14, "v": 10}},
    {"question": 50, "responses": {"i": 28, "ii": 27, "iii": 22, "iv": 13, "v": 10}},
    {"question": 51, "responses": {"i": 32, "ii": 28, "iii": 23, "iv": 9, "v": 8}},
    {"question": 52, "responses": {"i": 28, "ii": 27, "iii": 20, "iv": 15, "v": 10}},
    {"question": 53, "responses": {"i": 28, "ii": 23, "iii": 27, "iv": 12, "v": 10}},
    {"question": 54, "responses": {"i": 27, "ii": 28, "iii": 20, "iv": 15, "v": 10}},
    {"question": 55, "responses": {"i": 22, "ii": 33, "iii": 22, "iv": 15, "v": 8}},
    {"question": 56, "responses": {"i": 28, "ii": 28, "iii": 23, "iv": 12, "v": 9}},
    {"question": 57, "responses": {"i": 22, "ii": 27, "iii": 22, "iv": 15, "v": 14}},
    {"question": 58, "responses": {"i": 27, "ii": 23, "iii": 18, "iv": 23, "v": 9}},
    {"question": 59, "responses": {"i": 32, "ii": 28, "iii": 20, "iv": 12, "v": 8}},
    {"question": 60, "responses": {"i": 28, "ii": 28, "iii": 20, "iv": 12, "v": 12}},
    {"question": 61, "responses": {"i": 22, "ii": 17, "iii": 13, "iv": 37, "v": 11}},
    {"question": 62, "responses": {"i": 28, "ii": 28, "iii": 20, "iv": 15, "v": 9}},
    {"question": 63, "responses": {"i": 28, "ii": 23, "iii": 28, "iv": 12, "v": 9}},
    {"question": 64, "responses": {"i": 33, "ii": 23, "iii": 28, "iv": 12, "v": 4}},
    {"question": 65, "responses": {"i": 33, "ii": 23, "iii": 17, "iv": 16, "v": 11}},
    {"question": 66, "responses": {"i": 38, "ii": 18, "iii": 20, "iv": 14, "v": 10}},
    {"question": 67, "responses": {"i": 28, "ii": 28, "iii": 20, "iv": 12, "v": 12}},
    {"question": 68, "responses": {"i": 28, "ii": 17, "iii": 20, "iv": 25, "v": 10}},
    {"question": 69, "responses": {"i": 27, "ii": 23, "iii": 18, "iv": 23, "v": 9}},
    {"question": 70, "responses": {"i": 27, "ii": 22, "iii": 22, "iv": 22, "v": 7}},
    {"question": 71, "responses": {"i": 28, "ii": 27, "iii": 20, "iv": 18, "v": 7}},
    {"question": 72, "responses": {"i": 27, "ii": 27, "iii": 20, "iv": 13, "v": 13}},
    {"question": 73, "responses": {"i": 23, "ii": 33, "iii": 18, "iv": 21, "v": 5}},
    {"question": 74, "responses": {"i": 28, "ii": 18, "iii": 25, "iv": 20, "v": 9}},
    {"question": 75, "responses": {"i": 18, "ii": 27, "iii": 18, "iv": 32, "v": 5}},
    {"question": 76, "responses": {"i": 28, "ii": 27, "iii": 18, "iv": 22, "v": 5}},
    {"question": 77, "responses": {"i": 13, "ii": 12, "iii": 33, "iv": 30, "v": 12}},
    {"question": 78, "responses": {"i": 18, "ii": 32, "iii": 28, "iv": 9, "v": 13}},
    {"question": 79, "responses": {"i": 12, "ii": 23, "iii": 33, "iv": 22, "v": 10}},
    {"question": 80, "responses": {"i": 27, "ii": 23, "iii": 27, "iv": 18, "v": 5}},
    {"question": 81, "responses": {"i": 27, "ii": 23, "iii": 27, "iv": 13, "v": 10}},
    {"question": 82, "responses": {"i": 33, "ii": 23, "iii": 27, "iv": 8, "v": 9}},
    {"question": 83, "responses": {"i": 33, "ii": 28, "iii": 17, "iv": 17, "v": 5}},
    {"question": 84, "responses": {"i": 27, "ii": 27, "iii": 18, "iv": 21, "v": 7}},
    {"question": 85, "responses": {"i": 27, "ii": 27, "iii": 18, "iv": 22, "v": 6}},
    {"question": 86, "responses": {"i": 33, "ii": 23, "iii": 20, "iv": 12, "v": 12}},
    {"question": 87, "responses": {"i": 27, "ii": 27, "iii": 17, "iv": 24, "v": 5}},
    {"question": 88, "responses": {"i": 28, "ii": 23, "iii": 20, "iv": 20, "v": 9}},
    {"question": 89, "responses": {"i": 28, "ii": 28, "iii": 22, "iv": 15, "v": 7}},
    {"question": 90, "responses": {"i": 23, "ii": 33, "iii": 22, "iv": 15, "v": 7}},
    {"question": 91, "responses": {"i": 28, "ii": 23, "iii": 27, "iv": 18, "v": 4}},
    {"question": 92, "responses": {"i": 22, "ii": 22, "iii": 28, "iv": 15, "v": 13}},
    {"question": 93, "responses": {"i": 18, "ii": 27, "iii": 23, "iv": 20, "v": 12}},
    {"question": 94, "responses": {"i": 22, "ii": 22, "iii": 23, "iv": 23, "v": 10}},
    {"question": 95, "responses": {"i": 22, "ii": 28, "iii": 20, "iv": 17, "v": 13}},
    {"question": 96, "responses": {"i": 33, "ii": 23, "iii": 20, "iv": 12, "v": 12}},
    {"question": 97, "responses": {"i": 33, "ii": 28, "iii": 23, "iv": 8, "v": 8}},
    {"question": 98, "responses": {"i": 22, "ii": 27, "iii": 33, "iv": 13, "v": 5}},
    {"question": 99, "responses": {"i": 23, "ii": 22, "iii": 28, "iv": 20, "v": 7}},
    {"question": 100, "responses": {"i": 23, "ii": 22, "iii": 28, "iv": 18, "v": 9}}
]

};

// Question text based on the survey images
const questionTexts = {
    1: "You come from",
    2: "Your family background, you come",
    3: "What is size of your family",
    4: "Are you educated",
    5: "Education level in your family",
    6: "Does your family adhere to caste system",
    7: "What is source of income of your family",
    8: "Regarding type of profession",
    9: "Jam Pravana is another roll known for",
    10: "The venue for Cultural Studies and Research",
    11: "The entire head of Dandi Pontijems and celebrities belonging to the city of Varanasi",
    12: "The culture of Vishwakarma's artwork on gold",
    13: "Your most serious business city of Varanasi",
    14: "The city has a mode of Bharat to an artistic music",
    15: "The Ashwat Colloay (Varnasi came the essence in 1906 The following Hats)",
    16: "The city has a modern Bharat to an artistic music as well",
    17: "How many temples are there in Varanasi?",
    18: "Which is the most famous of all the temples of Varanasi?",
    19: "Kashi Vishwanath temple at Gorkhha",
    20: "You left temple because",
    21: "Non-religious regarding the city of Varanasi",
    22: "Culture of Varanasi is",
    23: "Which of your opinion is the most attractive festival of Varanasi?",
    24: "Do you agree that Belief in God helps in personal growth?",
    25: "Do you believe in supernatural powers?",
    26: "In your opinion",
    27: "You are connected to a",
    28: "How regularly do you attend the Maasm Hari?",
    29: "How do you feel pride in the place of Worship?",
    30: "Do you believe in superstitions and effects",
    31: "What is your perception to community during Change?",
    32: "What is your opinion about today's youth?",
    33: "My perception on doing a thing is that",
    34: "Spiritual culture is related to philosophy and religion",
    35: "You have had a change in your self-realization after you become spiritual",
    36: "Your opinion about Vrindra Varanasi has the following facts",
    37: "Udavi Kumar Varanasi has the following facts",
    38: "The programs are cells good deciding out of become a human being",
    39: "The perfect program for yourself",
    40: "Level of spiritual development among the youths",
    41: "Media perception on doing things is that",
    42: "There is going programme for your opinion for whites",
    43: "Discourse of Mamadas is most common example of spiritual and cultural communication",
    44: "Reveladaya at Laanat is known throughout the city",
    45: "Digital and print media has affected spiritual communication thoroughly",
    46: "This serves time a impact of difficult media till this societal and spiritual events",
    47: "Digital and print media has affected spiritual communication thought",
    48: "In other days media was limited, my opinion regarding spiritual communication",
    49: "Spiritual communication means that does not concentrate to mention and social",
    50: "The calls limited to in a spiritual community which is possible through people communication",
    51: "As per tradition",
    52: "The communication in the city of Varanasi my opinion regarding spiritual communication",
    53: "Also for a spiritual program on TV practise spiritual on the announcing tune for spiritual",
    54: "Varanasi Pravana",
    55: "Try has been quite affordable now for p,g.r mass. About the spiritual program on TV",
    56: "Regarding spiritual communication and TV channels",
    57: "Varalyas is most popular TV channel by spiritual programs",
    58: "The TV channels offer various programs in Hindi",
    59: "How do you watch spiritual programs on spiritual",
    60: "How often you watch TV programs on spirituality",
    61: "How long and how regularly you watch programs on spirituality",
    62: "Almost II every day",
    63: "Almost a new day",
    64: "Mobile is a boon and a curse too",
    65: "What someone thinks about Bharat Ratna of Bharat Ratna Maharatra, P Jatian, Mohan",
    66: "Varanasi has several other repruted academic",
    67: "Bhu is oldest institution",
    68: "Social Science Department contribute to students and people of Varanasi",
    69: "Department of Jyotish contributes tell ya students and people of Varanasi",
    70: "Sam Rawidas was born and lived his life in Varanasi; your opinion",
    71: "He was educated in is for result in influence of people of Varanasi",
    72: "Sant Kabir or Kashi Dayana is born in Varanasi; your opinion about him",
    73: "He was a famous poor of BHu Varanasi Movement of in his life India",
    74: "Prof. R. Radhakrishnan was",
    75: "Central institute of Higher Tibetan Studies is located at Sarnath",
    76: "Your opinion on the long venues of temples etc., especially during festivals are",
    77: "Yogapromotis in performing by the help of Spiritual Prakash come at Varanasi",
    78: "Meditation in God and behaving to wealth as not a faithful communication",
    79: "Others location Oral Nat Tirackat added to social and spiritual values through much practice education",
    80: "Dharma (a dharman is in BHU your opinion about Bharat Kala Bhavan",
    81: "Dharmadharma or Dharmam is bhul Dharmam contribute this BHU",
    82: "It has viewed a Prof. Rai Krislina Dasa",
    83: "It is a Dhpram in Bherty of A its",
    84: "Aarti aarti Ganga aartha, and so on the scriptures",
    85: "SARE has compiled its Message is Charyam form BHU",
    86: "Others",
    87: "Ganga is a narta at a student storying centre",
    88: "It was Bhara Kala Mandi in BHU nagia general",
    89: "Spiritual culture is to philosophic attitude that allows us to integrate with spiritual activities",
    90: "Pand chittra gaytri vi Varanasi by well known; In your opinion",
    91: "Varanasi city has received the communication is basically commune communication with God and",
    92: "The effect of Cultural communication on personal growth and self religion",
    93: "Regarding Manusmriti is samanta for",
    94: "In as organised at the Gond ghat NOW Reader Piesici Ghat Ganga Varanasi",
    95: "A ram of the ceremony; ritualistic is declared",
    96: "Famous international breaks and other recognises the surname of Karma principle in the summerain",
    97: "The sammeran is organized in First to pull at each several ways communication tackle paper",
    98: "Regarding Manusmriti Samanta",
    99: "Famous international tourists coming from south India",
    100: "Time effect of Cultural communication on personal growth and self religion"
};

// ===============================
// USE YOUR EXISTING surveyData
// ===============================

// -------------------------------
// Use your existing surveyData (loaded via surveyData.js)
// -------------------------------
var surveyData = window.surveyData || surveyData;

// AGE GROUPS + COLORS
const ageGroups = ["18-23", "24-29", "30-35", "more-than-35"];
const ageColors = {
  "18-23": "#4e79a7",
  "24-29": "#59a14f",
  "30-35": "#f28e2c",
  "more-than-35": "#e15759"
};

// HTML refs
const questionSelect = document.getElementById("questionSelect");
const viewTypeSelect = document.getElementById("viewType");
const questionTextBox = document.getElementById("questionText");
const tableBody = document.getElementById("tableBody");
const totalQuestions = document.getElementById("totalQuestions");
const totalResponsesBox = document.getElementById("totalResponses");
const overallPercentBox = document.getElementById("overallPercentBox");
const downloadChartBtn = document.getElementById("downloadChart");
const downloadPdfBtn = document.getElementById("downloadPdf");
const darkModeToggle = document.getElementById("darkModeToggle");
const appContainer = document.getElementById("appContainer");

// Populate question dropdown
function loadQuestionDropdown() {
  const qCount = 100;
  totalQuestions.textContent = qCount;
  // keep initial Overall option in HTML; add questions
  for (let i = 1; i <= qCount; i++) {
    const op = document.createElement("option");
    op.value = i;
    op.textContent = "Question " + i;
    questionSelect.appendChild(op);
  }
}
loadQuestionDropdown();

// Chart instance & helper
let chart;
let lastPercentMatrix = null; // hold percentages for datalabels when overall selected

// Load a single question
function loadQuestion(questionNumber) {
  questionTextBox.textContent = `Detailed visual response analysis for Question ${questionNumber}`;

  const labels = ["i", "ii", "iii", "iv", "v"];
  const datasets = ageGroups.map(group => {
    const row = surveyData[group].find(q => q.question == Number(questionNumber));
    const values = labels.map(l => row.responses[l] || 0);
    return {
      label: group,
      data: values,
      backgroundColor: hexToRgba(ageColors[group], 0.9),
      borderColor: ageColors[group],
      borderWidth: 2,
      fill: false,
      tension: 0.3
    };
  });

  // hide overall percent box
  overallPercentBox.style.display = "none";
  lastPercentMatrix = null;

  updateChart(labels, datasets, false);
  updateTable(questionNumber);
}

// Update table for a question
function updateTable(questionNumber) {
  tableBody.innerHTML = "";
  if (questionSelect.value === "overall") return;

  ageGroups.forEach(group => {
    const row = surveyData[group].find(q => q.question == Number(questionNumber));
    Object.keys(row.responses).forEach(option => {
      const count = row.responses[option];
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${group}</td>
        <td>${option}</td>
        <td>${count}</td>
        <td>${((count / 100) * 100).toFixed(1)}%</td>
      `;
      tableBody.appendChild(tr);
    });
  });
}

// Create / update chart
function updateChart(labels, datasets, isOverall) {
  if (chart) chart.destroy();

  // If overall, compute percentage matrix per label across datasets (used in datalabels)
  if (isOverall) {
    lastPercentMatrix = computePercentMatrix(labels, datasets);
    overallPercentBox.style.display = "block";
    overallPercentBox.innerHTML = renderOverallPercentSummary(labels, datasets);
  } else {
    lastPercentMatrix = null;
  }

  const ctx = document.getElementById("responseChart");
  chart = new Chart(ctx, {
    type: viewTypeSelect.value,
    data: { labels, datasets },
    plugins: [ChartDataLabels],
    options: {
      responsive: true,
      animation: {
        duration: 800,
        easing: 'easeOutCubic'
      },
      plugins: {
        title: {
          display: true,
          text: isOverall ? "Overall Survey Response Summary (Averages & %)" : "Survey Response Overview",
          font: { size: 18 }
        },
        legend: { display: true },
        datalabels: {
          anchor: "end",
          align: "top",
          formatter: function(value, context) {
            // value is numeric (average or count)
            if (lastPercentMatrix && lastPercentMatrix[context.dataIndex]) {
              // show "value (xx%)"
              const pct = lastPercentMatrix[context.dataIndex][context.datasetIndex];
              return `${value}\n(${pct}%)`;
            }
            return `${value}`;
          },
          font: { weight: "600", size: 11 },
          color: function(context) {
            // ensure contrast with dark mode
            return document.body.classList.contains('dark') ? '#e8f0ff' : '#0f1724';
          }
        },
        tooltip: {
          callbacks: {
            label: function(ctx) {
              let label = ctx.dataset.label || "";
              if (label) label += ": ";
              label += ctx.raw;
              if (lastPercentMatrix && lastPercentMatrix[ctx.dataIndex]) {
                label += ` (${ lastPercentMatrix[ctx.dataIndex][ctx.datasetIndex] }%)`;
              }
              return label;
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: { precision:0 }
        }
      }
    }
  });
}

// Compute percent matrix: for each label (index), compute sum across datasets and determine each dataset's percent
function computePercentMatrix(labels, datasets) {
  // matrix: [labelIndex][datasetIndex] => percent (rounded)
  const matrix = [];
  labels.forEach((lbl, li) => {
    let sum = 0;
    datasets.forEach(ds => { sum += Number(ds.data[li]) || 0; });
    const row = datasets.map(ds => {
      const val = Number(ds.data[li]) || 0;
      return sum === 0 ? 0 : Math.round((val / sum) * 100);
    });
    matrix.push(row);
  });
  return matrix;
}

// Render small summary box for overall percentages (per option, sums across age groups)
function renderOverallPercentSummary(labels, datasets) {
  // For each label, compute total across datasets and percent of grand total
  const labelTotals = labels.map((lbl, i) => datasets.reduce((s, ds) => s + Number(ds.data[i] || 0), 0));
  const grandTotal = labelTotals.reduce((s, v) => s + v, 0) || 1;
  const rows = labels.map((lbl, i) => {
    const val = labelTotals[i];
    const pct = Math.round((val / grandTotal) * 100);
    return `<div class="op-row"><strong>${lbl.toUpperCase()}</strong>: ${val} ( ${pct}% )</div>`;
  });
  return `<strong>Overall (options combined across age groups)</strong><div style="margin-top:8px">${rows.join('')}</div>`;
}

// OVERALL summary (averages)
function loadOverallChart() {
  questionTextBox.textContent = "Overall Response Summary (Average Across All Questions)";

  const labels = ["i", "ii", "iii", "iv", "v"];
  const datasets = [];

  ageGroups.forEach(group => {
    let totals = { i: 0, ii: 0, iii: 0, iv: 0, v: 0 };
    const questionCount = surveyData[group].length || 1;
    surveyData[group].forEach(q => {
      for (let k in totals) totals[k] += Number(q.responses[k] || 0);
    });
    // convert to average (one decimal)
    const averages = labels.map(l => Number((totals[l] / questionCount).toFixed(1)));
    datasets.push({
      label: group,
      data: averages,
      backgroundColor: hexToRgba(ageColors[group], 0.9),
      borderColor: ageColors[group],
      borderWidth: 2,
      fill: false,
      tension: 0.3
    });
  });

  // show overall percent box
  overallPercentBox.style.display = "block";
  updateChart(labels, datasets, true);

  // empty table for overall
  tableBody.innerHTML = "";
  // update approximate total responses box for display (sum of averages * questions ~ approx)
  const approxTotal = datasets.reduce((s, ds) => {
    return s + ds.data.reduce((a, b) => a + Number(b || 0), 0);
  }, 0);
  totalResponsesBox.textContent = Math.round(approxTotal);
}

// hex color to rgba helper
function hexToRgba(hex, alpha=1) {
  hex = hex.replace('#','');
  if (hex.length===3) hex = hex.split('').map(h=> h+h).join('');
  const bigint = parseInt(hex,16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r},${g},${b},${alpha})`;
}

// --------------------
// Event listeners
// --------------------
questionSelect.addEventListener('change', () => {
  if (questionSelect.value === "overall") loadOverallChart();
  else loadQuestion(parseInt(questionSelect.value));
});

viewTypeSelect.addEventListener('change', () => {
  // redraw current view (keeps overall if selected)
  if (questionSelect.value === "overall") loadOverallChart();
  else loadQuestion(parseInt(questionSelect.value));
});

// Download chart image
downloadChartBtn.addEventListener('click', () => {
  const canvas = document.getElementById('responseChart');
  const link = document.createElement('a');
  link.download = `survey_chart_${Date.now()}.png`;
  link.href = canvas.toDataURL('image/png', 1.0);
  link.click();
});

// Download full PDF report (Option A: full professional report)
downloadPdfBtn.addEventListener('click', async () => {
  // Use html2canvas to capture chart area and table
  const { jsPDF } = window.jspdf;

  // capture chart (canvas) first
  const chartCanvas = document.getElementById('responseChart');
  // clone the chartCanvas to preserve current chart and ensure same resolution
  const chartDataUrl = chartCanvas.toDataURL('image/png', 1.0);

  // capture table container and question box
  const questionNode = document.getElementById('questionText');
  const tableNode = document.getElementById('dataTable');

  // create PDF
  const pdf = new jsPDF({ orientation: 'landscape', unit: 'pt', format: 'a4' });
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();

  // Add title
  pdf.setFontSize(18);
  pdf.text("Survey Response Report", 40, 40);
  pdf.setFontSize(11);
  pdf.text(`Generated: ${new Date().toLocaleString()}`, 40, 60);

  // Add question text
  const qText = questionTextBox.textContent || '';
  pdf.setFontSize(12);
  pdf.text(`Question: ${qText}`, 40, 85);

  // Add chart image below title
  const imgProps = pdf.getImageProperties(chartDataUrl);
  // fit chart width to page minus margins
  const chartMaxWidth = pageWidth - 80;
  // calculate height preserving aspect ratio
  const chartHeight = (imgProps.height * chartMaxWidth) / imgProps.width;
  pdf.addImage(chartDataUrl, 'PNG', 40, 100, chartMaxWidth, chartHeight);

  // Capture table DOM to image using html2canvas and add to PDF (may be multi-page)
  const tableCanvas = await html2canvas(tableNode, { scale: 2, backgroundColor: document.body.classList.contains('dark') ? '#0b1220' : '#ffffff' });
  const tableDataUrl = tableCanvas.toDataURL('image/png');

  // If table image height fits remaining page, place; otherwise add new page(s)
  let yPos = 100 + chartHeight + 20;
  const availableHeight = pageHeight - yPos - 40;

  const tableImgProps = pdf.getImageProperties(tableDataUrl);
  const tableImgWidth = pageWidth - 80;
  const tableImgHeight = (tableImgProps.height * tableImgWidth) / tableImgProps.width;

  if (tableImgHeight <= availableHeight) {
    pdf.addImage(tableDataUrl, 'PNG', 40, yPos, tableImgWidth, tableImgHeight);
  } else {
    // scale to page and add multiple pages if needed
    // split the canvas vertically
    const totalHeight = tableCanvas.height;
    const pxPerPt = tableCanvas.width / tableImgWidth; // pixels per pdf point
    let renderedHeight = 0;
    while (renderedHeight < totalHeight) {
      const sectionHeightPx = Math.min(totalHeight - renderedHeight, Math.round(availableHeight * pxPerPt));
      // create temp canvas
      const tmp = document.createElement('canvas');
      tmp.width = tableCanvas.width;
      tmp.height = sectionHeightPx;
      const ctx = tmp.getContext('2d');
      ctx.drawImage(tableCanvas, 0, renderedHeight, tableCanvas.width, sectionHeightPx, 0, 0, tmp.width, tmp.height);
      const dataUrl = tmp.toDataURL('image/png');
      if (renderedHeight === 0) {
        pdf.addImage(dataUrl, 'PNG', 40, yPos, tableImgWidth, (sectionHeightPx / pxPerPt));
      } else {
        pdf.addPage();
        pdf.addImage(dataUrl, 'PNG', 40, 40, tableImgWidth, (sectionHeightPx / pxPerPt));
      }
      renderedHeight += sectionHeightPx;
    }
  }

  // Save PDF
  pdf.save(`Survey_Report_${Date.now()}.pdf`);
});

// Dark mode toggle
darkModeToggle.addEventListener('change', (e) => {
  if (e.target.checked) {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }
  // re-render chart so datalabel colors / background match theme
  if (questionSelect.value === "overall") loadOverallChart();
  else loadQuestion(questionSelect.value);
});

// Utility: compute approximate total responses (for stat)
function computeApproxTotalResponses() {
  // sum of absolute values of all responses across all groups and questions (rough)
  let total = 0;
  ageGroups.forEach(g => {
    surveyData[g].forEach(q => {
      Object.values(q.responses).forEach(v => total += Number(v || 0));
    });
  });
  return total;
}

// Helper: force initial load to overall
function init() {
  // set totalResponses (approx)
  const approx = computeApproxTotalResponses();
  if (totalResponsesBox) totalResponsesBox.textContent = approx;
  questionSelect.value = "overall";
  loadOverallChart();
}
init();
