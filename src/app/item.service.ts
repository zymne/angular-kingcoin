import { Injectable } from '@angular/core';
import { Item } from './model/Item'
import { of, Observable } from 'rxjs'
import { MessageService } from './message.service'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { catchError, tap, map } from 'rxjs/operators'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private itemsUrl ='http://localhost:8081/items';

  ITEMS: Item[] = [
    {id: 1, title:'100 rub', category:'banknotes', price:150, country: { code: 'RU', name: 'Russia'}, images: [], issueYear:2018, published: true},
    {id: 2, title:'200 rub', category:'banknotes', price:250, country: { code: 'RU', name: 'Russia'}, images: [], issueYear:2018, published: true}
];

  getItems(): Observable<Item[]> {    
    this.log('ItemService: fetched items');
    //return of(this.ITEMS);
    return this.http.get<Item[]>(this.itemsUrl).pipe(catchError(this.handleError('getItems', [])));
  }

  /** GET item by id. Will 404 if id not found */
  getItem(id: number): Observable<Item> {
    const url = `${this.itemsUrl}/${id}`;
    return this.http.get<Item>(url).pipe(
      tap(_ => this.log(`fetched item id=${id}`)),
      catchError(this.handleError<Item>(`getItem id=${id}`))
    );
  }

  /** POST: add a new item to the server */
  addItem(item: Item): Observable<Item> {
    return this.http.post<Item>(this.itemsUrl, item, httpOptions).pipe(
      tap((item: Item) => this.log(`added item w/ id=${item.id}`)),
      catchError(this.handleError<Item>('addItem'))
    );
  }

  delete(ids: String[]): Observable<Number> {
    const url = `${this.itemsUrl}/delete`;
    return this.http.post<Number>(url, ids, httpOptions);
  }

  /** PUT: update the item on the server */
  updateItem (item: Item): Observable<any> {
    return this.http.put(this.itemsUrl, item, httpOptions).pipe(
      tap(_ => this.log(`updated item id=${item.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  constructor(
    private http: HttpClient,
    private messageService: MessageService) {
  }

  private log(message: string) {
    //this.messageService.add(message);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      
      console.error(error);
      
      this.log('${operation} failed: ${error.message}')

      return of(result as T);
    }
  }

}





