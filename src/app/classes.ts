export class Task {
    constructor(public name: String, readonly id?: Number) {
    }
}

export enum ScheduleOption {
    Before,
    After
}

export class WeirdTree<T> {
    constructor(private node: T,
                private before: Set<WeirdTree<T>>,
                private after: Set<WeirdTree<T>>) {}

    inorder(): T[] {
        return [].concat(
            this.flatMap(this.before, this.inorder),
            [this.node],
            this.flatMap(this.after, this.inorder))
    }

    flatMap(array, func): Set<T> {
        return new Set(...([...array].map(e => e.func())))
    }

    find(id: T): T {
        if (this.node === id) {
            return this.node
        }
        else {
            // ?
        }
    }

}

export class Schedule {
    private tasks: WeirdTree<Number>
    constructor() {}

    getTasks() { return this.tasks.inorder() }
    add()
}

