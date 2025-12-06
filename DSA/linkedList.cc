#include <iostream>
#include <string>

class Node
{
public:
    int value;
    Node *next;

    Node(int value)
    {

        this->value = value;
        this->next = nullptr;
    }
};

class linkedList
{

public:
    Node *head;

    linkedList()
    {

        this->head = nullptr;
    }

    void push(int value)
    {

        Node *newNode = new Node(value);
        newNode->next = this->head;
        this->head = newNode;
    }

    void append(int value)
    {
        if (this->head == nullptr)
        {
            this->head = new Node(value);
            return;
        }
        Node *current = this->head;

        while (current->next != nullptr)
        {
            current = current->next;
        }
        current->next = new Node(value);
        return;
    }

    void print()
    {
        Node *current = this->head;
        std::string output;
        while (current != nullptr)
        {
            output += std::to_string(current->value);
            if (current->next != nullptr)
            {
                output += " -> ";
            }
            current = current->next;
        }
        std::cout << output << std::endl;
    }

    void shift()
    {
        if (this->head == nullptr)
        {
            return;
        }
        Node *temp = this->head;
        head = head->next;
        delete temp;
    }

    void pop()
    {
        if (this->head == nullptr)
            return;
        if (this->head->next == nullptr)
        {
            delete head;
            head = nullptr;
            return;
        }
        Node *temp = this->head;
        while (temp->next->next != nullptr)
        {
            temp = temp->next;
        }
        delete temp->next;
        temp->next = nullptr;
    }
};

int main(int argc, char *argv[])
{
    linkedList *list = new linkedList();
    int n;
    std::cin>>n;
    int arr[n];

    for (int i = 0; i < n; i++)
    {
        std::cin>>arr[i];
    }
    
    for (int i = 0; i < n; i++)
    {
        list->push(arr[i]);
    }
    list->print();
    delete list;
    return 0;
}