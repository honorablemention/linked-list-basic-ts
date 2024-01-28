/**
 * Node class; next is initialized to null.
 * @template T
 * @constructor data T
 */
class LLNode<T> {
  data: T;
  next: LLNode<T> | null;
  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

/**
 * LinkedList class
 * @template T
 */
class LinkedList<T> {
  private head: LLNode<T> | null;

  constructor() {
    this.head = null;
  }

  /**
   * Returns empty state of list
   * @returns boolean
   */
  public isEmpty(): boolean {
    return this.head === null;
  }

  /**
   * Return size of list
   * @returns number
   */
  public size(): number {
    return this.get().length;
  }

  /**
   * Returns array representation of list
   * @returns T[]
   */
  public get(): T[] {
    if (this.isEmpty()) return [];
    let current = this.head;
    let list = [];
    while (current.next !== null) {
      list.push(current.data);
      current = current.next;
    }
    list.push(current.data);
    return list;
  }

  /**
   * Prints array reprsentation of list to console
   */
  public show(): void {
    console.log(this.get());
  }

  /**
   * Adds data to end of list; returns head
   * @param data T
   * @returns LLNode<T>
   */
  public add(data: T): LLNode<T> {
    // Note: This method can be written as in the below comment:
    // ...
    // if (this.isEmpty()) {
    //   this.head = new LLNode(data);
    //   this.head.next = null;
    //   return this.head;
    // }
    // let current = this.head;
    // while (current.next !== null) {
    //   current = current.next;
    // }
    // current.next = new LLNode(data);
    // current.next.next = null;
    // return this.head;
    // ...
    // or generalized to:
    return this.isEmpty()
      ? this.insertAt(data, 0)
      : this.insertAt(data, this.size());
  }

  /**
   * Removes node at position; returns head
   * @param position number
   * @returns LLNode<T>
   */
  public removeAt(position: number): LLNode<T> {
    if (this.isEmpty()) throw new Error('LinkedList is empty');
    if (position > this.size()) throw new Error('Position is undefined');
    if (position === 0) {
      this.head = this.head.next;
      return this.head;
    }
    let current: LLNode<T> = this.head;
    let previous: LLNode<T> | null = null;
    let index = 0;
    while (index < position) {
      previous = current;
      current = current.next;
      index++;
    }
    if (previous) {
      previous.next = current.next;
    }
    return this.head;
  }

  /**
   * Inserts data at position; returns head
   * @param position number
   * @return LLNode<T>
   */
  public insertAt(data: T, position: number): LLNode<T> {
    if (position > this.size() + 1 || position < 0)
      throw new Error('Invalid position');
    const newNode = new LLNode(data);
    if (position === 0) {
      let t = this.head;
      this.head = newNode;
      this.head.next = t;
      return this.head;
    }
    let current: LLNode<T> = this.head;
    let previous: LLNode<T> | null = null;
    let index = 0;
    while (index < position) {
      previous = current;
      current = current.next;
      index++;
    }
    newNode.next = current;
    if (previous) {
      previous.next = newNode;
    }
    return this.head;
  }
}

export default LinkedList;
