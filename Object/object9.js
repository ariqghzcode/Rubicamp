// Tulis function createDataStore di sini
function createDataStore() {
    let records = [];
    let indexById = {};

    function insert(record) {
        records.push(record);
        indexById[record.id] = record;
        return record;
    }

    function find(criteria) {
        let results = [];

        for (let i = 0; i < records.length; i++) {
            let record = records[i];
            let matches = true;

            for (let key in criteria) {
                if (record[key] !== criteria[key]) {
                    matches = false;
                }
            }

            if (matches === true) {
                results.push(record);
            }
        }

        return results;
    }

    function update(id, changes) {
        let record = indexById[id];

        if (!record) {
            return { success: false, updated: null };
        }

        for (let key in changes) {
            record[key] = changes[key];
        }

        return { success: true, updated: record };
    }

    function remove(id) {
        let record = indexById[id];

        if (!record) {
            return { success: false };
        }

        delete indexById[id];

        let newRecords = [];
        for (let i = 0; i < records.length; i++) {
            if (records[i].id !== id) {
                newRecords.push(records[i]);
            }
        }
        records = newRecords;

        return { success: true };
    }

    function getStats() {
        let totalRecords = records.length;

        // Ambil daftar department yang unik (tanpa duplikat)
        let departments = [];
        for (let i = 0; i < records.length; i++) {
            let dept = records[i].department;
            let alreadyExists = false;

            for (let j = 0; j < departments.length; j++) {
                if (departments[j] === dept) {
                    alreadyExists = true;
                }
            }

            if (alreadyExists === false) {
                departments.push(dept);
            }
        }

        // Hitung rata-rata gaji
        let totalSalary = 0;
        for (let i = 0; i < records.length; i++) {
            totalSalary = totalSalary + records[i].salary;
        }
        let averageSalary = totalSalary / totalRecords;

        // Cari gaji minimum dan maksimum
        let minSalary = records[0].salary;
        let maxSalary = records[0].salary;
        for (let i = 1; i < records.length; i++) {
            if (records[i].salary < minSalary) {
                minSalary = records[i].salary;
            }
            if (records[i].salary > maxSalary) {
                maxSalary = records[i].salary;
            }
        }

        return {
            totalRecords: totalRecords,
            departments: departments,
            averageSalary: averageSalary,
            salaryRange: { min: minSalary, max: maxSalary }
        };
    }

    return {
        insert: insert,
        find: find,
        update: update,
        delete: remove,
        getStats: getStats
    };
}

let store = createDataStore();
store.insert({ id: 1, name: "Alice", department: "IT", salary: 5000 });
store.insert({ id: 2, name: "Bob", department: "HR", salary: 4500 });
store.insert({ id: 3, name: "Charlie", department: "IT", salary: 5500 });

console.log(store.find({ department: "IT" }));
console.log(store.update(2, { salary: 4800 }));
console.log(store.getStats());