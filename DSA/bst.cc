#include <bits/stdc++.h>
using namespace std;
class Node
{
public:
    int value;
    Node *left;
    Node *right;

    Node(int value)
    {
        this->value = value;
        left = nullptr;
        right = nullptr;
    }
};

class BinaryTree
{
public:
    Node *root;
    BinaryTree()
    {
        root = nullptr;
    }
    Node *insert(Node *root, int value)
    {
        if (root == nullptr)
            return new Node(value);
        if (value < root->value)
        {
            root->left = insert(root->left, value);
        }
        if (value > root->value)
        {
            root->right = insert(root->right, value);
        }
        return root;
    }
    void bfs(Node *root, int target){
        if(root == nullptr){
            cout<< "tree is empty";
            return;
        }
        std::queue<Node*> queue;
        queue.push(root);
        while (!queue.empty())
        {
            Node * current = queue.front();
            queue.pop();
            if(current->value == target){
                cout<<"Found it"<<endl;
                return;
            }
            if( current->left != nullptr){
                queue.push(current->left);
            }
            if(current->right != nullptr){
                queue.push(current->right);
            }
        }
        cout<<"not found";
        return;
    }
    void dfs_inOrder(Node *root)
    {
        if (root == nullptr)
            return;

        dfs_inOrder(root->left);
        std::cout << root->value << " ";
        dfs_inOrder(root->right);
    }
    
};

int main(int agrc, char *agrv[])
{
    BinaryTree * tree = new BinaryTree();
    std::vector<int>* list = new std::vector<int>;

    tree->root = tree->insert(tree->root, 10);
    tree->root = tree->insert(tree->root, 5);
    tree->root = tree->insert(tree->root, 15);
    tree->root = tree->insert(tree->root, 3);
    tree->dfs_inOrder(tree->root);
    tree->bfs(tree->root, 5);
    return 0;
}
